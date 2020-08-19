load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
load("//rules:nunjucks.bzl", "nunjucks")
load("//rules:prettier.bzl", "prettier")
load("//rules:tags.bzl", "tags_test")
load("@npm//@bazel/typescript:index.bzl", "ts_library")
load("@rules_pkg//:pkg.bzl", "pkg_tar")

def sample():
    """ generates the various outputs"""
    ts_library(
        name = "_compile",
        srcs = ["src/index.ts"],
        prodmode_target = "esnext",
        deps = [
            "@npm//@types/googlemaps",
            "@npm//@types/google.visualization",
        ],
    )

    native.filegroup(
        name = "_compile_outputs",
        srcs = ["_compile"],
        output_group = "es6_sources",
    )

    native.genrule(
        name = "index_js",
        srcs = [":_compile_outputs", "//:.eslintrc.json"],
        outs = ["index.js"],
        cmd = "cat $(RULEDIR)/src/index.mjs > $@; " +
              "$(location //rules:remove_apache_license) $@; " +
              "$(location //rules:strip_source_map_url_bin) $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "sed -i'.bak' 's/export const/const/g' $@; " +
              "sed -i'.bak' 's/export {.*};//g' $@; " +
              "sed -i'.bak' 's/\\/\\/ @ts-.*//g' $@; " +
              "$(location //rules:prettier) --write $@; " +
              "$(location //rules:eslint) -c $(location //:.eslintrc.json) --fix $@; ",
        tools = ["//rules:eslint", "//rules:remove_apache_license", "//rules:strip_source_map_url_bin", "//rules:strip_region_tags_bin", "//rules:prettier"],
        visibility = ["//visibility:public"],
    )

    native.genrule(
        name = "iframe_js",
        outs = [":iframe.js"],
        cmd = "$(location //rules:babel) --config-file $(location //:.babelrc) --out-file $@ $(location :index.js)",
        srcs = [
            ":index.js",
            "//:.babelrc",
            "@npm//:node_modules",
        ],
        tools = ["//rules:babel"],
    )

    native.genrule(
        name = "app_js",
        outs = [":app.js"],
        cmd = "$(location //rules:babel) --config-file $(location //:.babelrc.jsfiddle.json) --out-file $@ $(location :index.js); " +
              "$(location //rules:prettier) --write $@; ",
        srcs = [
            ":index.js",
            "//:.babelrc.jsfiddle.json",
            "@npm//:node_modules",
        ],
        tools = ["//rules:babel", "//rules:prettier"],
        visibility = ["//visibility:public"],
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
        cmd = "sed  \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $(location :app.js) > $@; " +
              "$(location //rules:prettier) --write $@; ",
        srcs = [
            ":app.js",
        ],
        tools = ["//rules:prettier"],
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
        srcs = [":_sample.html", ":app.js", ":style.css"],
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

    # for local development
    nunjucks(
        name = "_index",
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
        cmd = "$(location //rules:inline) $(location :_index.html) $@; " +
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
        tools = ["//rules:inline", "//rules:prettier", "//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    pkg_tar(
        name = "package",
        srcs = [":style.css", ":sample.html", ":src/index.ts", "//shared:package"],
        strip_prefix = ".",
        extension = "tgz",
        mode = "0755",
        remap_paths = {
            "/sample.html": "static/index.html",
            "/style.css": "public/style.css",
            "shared/package/": "",
        }
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
            ":index.html",  # for development and googlemaps.github.io
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
            ":package.tgz",
        ],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "inputs",
        srcs = ["src/index.ts", "src/style.scss", "src/index.njk"],
        visibility = ["//visibility:public"],
    )

    tags_test(name = "test_tags_ts", file = ":src/index.ts")
    tags_test(name = "test_tags_css", file = ":style.css")
    tags_test(name = "test_tags_html", file = ":sample.html")

    
