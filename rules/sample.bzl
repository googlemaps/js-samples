load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
load("//rules:nunjucks.bzl", "nunjucks")
load("//rules:prettier.bzl", "prettier")
load("//rules:tags.bzl", "tags_test")
load("//rules:js_test.bzl", "js_test")
load("//rules:template.bzl", "template_file")
load("@npm//@bazel/typescript:index.bzl", "ts_library")
load("@npm//@bazel/concatjs:index.bzl", "concatjs_devserver")
load("@rules_pkg//:pkg.bzl", "pkg_tar")
load("@npm//@babel/cli:index.bzl", "babel")

def sample(name):
    """ Generates sample outputs

    Args:
      name: sample directory name
    """
    ts_library(
        name = "_compile",
        srcs = ["src/index.ts"],
        prodmode_target = "esnext",
        deps = [
            "@npm//@types/google.maps",
            "@npm//@types/google.visualization",
        ],
        tags = ["ts"],
    )

    native.filegroup(
        name = "_compile_outputs",
        srcs = ["_compile"],
        output_group = "es6_sources",
    )

    native.genrule(
        name = "compiled_js",
        srcs = [":_compile_outputs", "//:.eslintrc.json"],
        outs = ["compiled.js"],
        cmd = "cat $(RULEDIR)/src/index.mjs > $@; " +
              "sed -i'.bak' '/.*PRESERVE_COMMENT_ABOVE.*/d' $@; " +  # it isn't possible to have tsc preserve some comments
              "sed -i'.bak' 's/export const/const/g' $@; " +
              "sed -i'.bak' 's/export {.*};//g' $@; " +
              "sed -i'.bak' '/^\\s*\\/\\/ @ts-.*/d' $@; " +
              "sed -i'.bak' 's/\\/\\/ @ts-.*//g' $@; ",
    )

    native.genrule(
        name = "dev_js",
        srcs = [":compiled.js"],
        outs = ["dev.js"],
        cmd = "cat $(location compiled.js) > $@; " +
              "sed -i'.bak' \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $@; ",
    )

    native.genrule(
        name = "app_js",
        srcs = [":compiled.js", "//:.eslintrc.json"],
        outs = ["index.js"],
        cmd = "cat $(location :compiled.js) > $@; " +
              "$(location //rules:remove_apache_license) $@; " +
              "$(location //rules:strip_source_map_url_bin) $@; " +
              "$(location //rules:prettier) --write $@; " +
              "$(location //rules:eslint) -c $(location //:.eslintrc.json) --fix $@; ",
        tools = [
            "//rules:eslint",
            "//rules:remove_apache_license",
            "//rules:strip_source_map_url_bin",
            "//rules:strip_region_tags_bin",
            "//rules:prettier",
            "@npm//eslint-config-prettier",
            "@npm//eslint-plugin-jest",
            "@npm//eslint-plugin-prettier",
            "@npm//fast-diff",
            "@npm//prettier",
            "@npm//prettier-linter-helpers",
        ],
        visibility = ["//visibility:public"],
    )

    # babel moves trailing region tags after the last non comment line
    # need to remove before babel transpilation
    native.genrule(
        name = "compiled_no_region_tags",
        srcs = [":index.js"],
        outs = ["compiled_no_region_tags.js"],
        cmd = "cat $(RULEDIR)/index.js > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; ",
        tools = ["//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    babel(
        name = "iframe_js",
        outs = [
            "iframe.js",
        ],
        args = [
            "$(execpath :compiled_no_region_tags.js)",
            "--config-file $(location //:.babelrc)",
            "--out-file",
            "$(execpath :iframe.js)",
        ],
        data = [
            "compiled_no_region_tags.js",
            "//:.babelrc",
            "@npm//@babel/preset-env",
        ],
    )

    native.genrule(
        name = "_scss_without_header",
        srcs = [":src/style.scss"],
        outs = ["_scss_without_header.scss"],
        cmd = "cat $(location :src/style.scss) > $@; " +
              "$(location //rules:remove_apache_license) $@; ",
        tools = ["//rules:remove_apache_license"],
    )

    sass_binary(
        name = "_style_css",
        src = ":_scss_without_header.scss",
        deps = [
            "//shared/scss:default",
            "//shared/scss:sidebar",
            "//shared/scss:material-design-theme",
            "//shared/scss:mixins",
            "//shared/scss:floating-panel",
            "//shared/scss:autocomplete",
            "//shared/scss:autocomplete-directions",
            "//shared/scss:right-panel",
            "//shared/scss:custom-control-state",
        ],
        output_name = "_style.css",
        sourcemap = False,
        output_style = "expanded",
        visibility = ["//visibility:public"],
    )

    for src, out in [
        (":_style.css", "style.css"),
    ]:
        prettier(
            src = src,
            out = out,
        )

    ## jsfiddle output
    nunjucks(
        name = "_jsfiddle_html",
        template = ":src/index.njk",
        json = ":package.json",
        data = [
            ":src/index.njk",
            ":package.json",
            "//shared:templates",
        ],
        outs = ["_jsfiddle.html"],
        mode = "jsfiddle",
    )

    native.genrule(
        name = "jsfiddle_html",
        srcs = [":_jsfiddle.html"],
        outs = ["jsfiddle.html"],
        cmd = "cat $(location :_jsfiddle.html) > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "sed -i'.bak' \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    native.genrule(
        name = "jsfiddle_js",
        outs = [":jsfiddle.js"],
        cmd = "sed  \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $(location :index.js) > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "$(location //rules:prettier) --write $@; ",
        srcs = [
            ":index.js",
        ],
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    ## sample html - two version, inlined and linked css/js
    nunjucks(
        name = "_sample",
        template = ":src/index.njk",
        json = ":package.json",
        data = [
            ":src/index.njk",
            ":package.json",
            "//shared:templates",
        ],
        outs = ["_sample.html"],
        mode = "sample",
    )

    native.genrule(
        name = "inline_html",
        srcs = [
            ":_sample.html",
            ":index.js",
            ":style.css",
        ],
        outs = ["inline.html"],
        cmd = "$(location //rules:inline) $(location :_sample.html) $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:inline", "//rules:prettier", "//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    native.genrule(
        name = "sample_html",
        srcs = [":_sample.html"],
        outs = ["sample.html"],
        cmd = "cat $(location :_sample.html) > $@; " +
              "sed -i'.bak' 's/data-inline//g' $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier"],
        visibility = ["//visibility:public"],
    )

    # for dev
    nunjucks(
        name = "_index_html",
        template = ":src/index.njk",
        json = ":package.json",
        data = [
            ":src/index.njk",
            ":package.json",
            "//shared:templates",
        ],
        outs = ["_index.html"],
        mode = "dev",
    )

    native.genrule(
        name = "index_html",
        srcs = [":_index.html", ":iframe.js", ":style.css"],
        outs = ["index.html"],
        cmd = "cp $(location :_index.html) $@; " +
              "sed -i'.bak' \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $@; ",
    )

    # for github pages
    nunjucks(
        name = "_github_html",
        template = ":src/index.njk",
        json = ":package.json",
        data = [
            ":src/index.njk",
            ":package.json",
            "//shared:templates",
        ],
        outs = ["_github.html"],
        mode = "github",
    )

    native.genrule(
        name = "github_html",
        srcs = [":_github.html", ":iframe.js", ":style.css"],
        outs = ["github.html"],
        cmd = "$(location //rules:inline) $(location :_github.html) $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "sed -i'.bak' \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:inline", "//rules:prettier", "//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    nunjucks(
        name = "_iframe",
        template = ":src/index.njk",
        json = ":package.json",
        data = [
            ":src/index.njk",
            ":package.json",
            "//shared:templates",
        ],
        outs = ["_iframe.html"],
        mode = "iframe",
    )

    # the iframe output does not have any html, head, body tags. this is a consequence of Google's documentation site
    native.genrule(
        name = "iframe_html",
        srcs = [":_iframe.html", ":iframe.js", ":style.css"],
        outs = ["iframe.html"],
        cmd = "$(location //rules:strip_region_tags_bin) $(location :iframe.js); " +
              "$(location //rules:strip_region_tags_bin) $(location :style.css); " +
              "$(location //rules:inline) $(location :_iframe.html) $@; " +
              "sed -i'.bak' \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:inline", "//rules:strip_region_tags_bin", "//rules:prettier"],
        visibility = ["//visibility:public"],
    )

    native.genrule(
        name = "env",
        srcs = ["//shared:env.tpl"],
        outs = [".env"],
        cmd = "sed \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $(location //shared:env.tpl) > $@;",
    )

    native.genrule(
        name = "package_html",
        srcs = [":sample.html"],
        outs = ["_package.html"],
        cmd = "cat $(location :sample.html) >$@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
    )

    native.genrule(
        name = "package_ts",
        srcs = [":src/index.ts"],
        outs = ["_package.ts"],
        cmd = "cat $(location :src/index.ts) > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "echo '\nimport \"./style.css\"; // required for webpack' >> $@; " +
              "sed -i'.bak' '/.*PRESERVE_COMMENT_ABOVE.*/d' $@; " +  # it isn't possible to have tsc preserve some comments
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
    )

    native.genrule(
        name = "package_css",
        srcs = [":style.css"],
        outs = ["_package.css"],
        cmd = "cat $(location :style.css) > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
    )

    pkg_tar(
        name = "{}-package".format(name),
        srcs = [":.env", ":_package.css", ":_package.html", ":_package.ts", "//shared:package"],
        strip_prefix = ".",
        extension = "tgz",
        mode = "0755",
        remap_paths = {
            "/_package.ts": "src/index.ts",
            "/_package.html": "src/index.html",
            "/_package.css": "src/style.css",
            "shared/package/": "",
        },
    )

    template_file(
        name = "cloud-shell-instructions",
        out = "CLOUD_SHELL_INSTRUCTIONS.md",
        template = "//shared:cloud_shell_instructions.tpl.md",
        substitutions = {"TMPL_SAMPLE": name},
    )

    native.filegroup(
        name = "js",
        srcs = [
            ":index.js",
            ":jsfiddle.js",
        ],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "html",
        srcs = [
            ":github.html",  # for development and googlemaps.github.io
            ":jsfiddle.html",  # for linkout to jsfiddle
            ":sample.html",  # for developers.google.com *html* tab
            ":inline.html",  # for developers.google.com *all* tab
            ":iframe.html",  # for developers.google.com iframe
        ],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "css",
        srcs = [
            ":style.css",
        ],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "outputs",
        srcs = [
            ":css",
            ":html",
            ":js",
            "{}-package.tgz".format(name),
            ":CLOUD_SHELL_INSTRUCTIONS.md",
        ],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "inputs",
        srcs = ["src/index.ts", "src/style.scss", "src/index.njk"],
        visibility = ["//visibility:public"],
    )

    tags_test(name = "test_tags_js", file = ":index.js")
    tags_test(name = "test_tags_ts", file = ":src/index.ts")
    tags_test(name = "test_tags_css", file = ":style.css")
    tags_test(name = "test_tags_html", file = ":sample.html")

    js_test(name = "test_index_js", file = ":index.js")
    js_test(name = "test_package_ts", file = ":_package.ts")

    native.genrule(
        name = "package_test",
        srcs = [":{}-package.tgz".format(name)],
        cmd = "set -x; tar xf $(location :{}-package.tgz); ".format(name) +
              "npm i; npm run build; cat public/index.js > $@",
        local = 1,
        tags = ["manual", "package"],
        outs = ["index.webpack.js"],
    )

    concatjs_devserver(
        name = "devserver",
        deps = [":dev.js"],
        serving_path = "/index.js",
        static_files = [":index.html", ":style.css"],
        port = 8080,
    )
