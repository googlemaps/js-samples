load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
load("//rules:nunjucks.bzl", "nunjucks")
load("//rules:prettier.bzl", "prettier")
load("//rules:js_test.bzl", "js_test")
load("//rules:package.bzl", "package")
load("//rules:template.bzl", "template_file")
load("@npm//@bazel/typescript:index.bzl", "ts_library")
load("@npm//@bazel/concatjs:index.bzl", "concatjs_devserver")
load("@rules_pkg//:pkg.bzl", "pkg_tar")
load("@npm//webpack-cli:index.bzl", webpack = "webpack_cli")
load("@bazel_skylib//rules:copy_file.bzl", "copy_file")

def sample(name, YOUR_API_KEY = "GOOGLE_MAPS_JS_SAMPLES_KEY", dependencies = [], devDependencies = ["@types/google.maps"]):
    """ Generates sample outputs

    Args:
      name: sample directory name
      YOUR_API_KEY: environment variable name for api key
      dependencies: third party dependencies
      devDependencies: third party dependencies
    """
    has_runtime_dependency = (len(dependencies) > 0)

    js_dependencies = ["@npm//{}".format(package) for package in dependencies] + ["@npm//{}".format(package) for package in devDependencies]

    webpack_dependencies = [
        "@npm//webpack",
        "@npm//webpack-cli",
        # loaders
        "@npm//babel-loader",
        "@npm//@babel/preset-env",
        "@npm//ts-loader",
        "@npm//css-loader",
        "@npm//string-replace-loader",
        # plugins
        "@npm//html-webpack-plugin",
        "@npm//html-replace-webpack-plugin",
        "@npm//mini-css-extract-plugin",
        # misc
        "@npm//typescript",
        "@npm//dotenv",
    ]

    # keeping this separate to prevent build slowdown
    webpack_serve_dependencies = webpack_dependencies + [
        "@npm//webpack-dev-server",
    ]

    ts_library(
        name = "_compile",
        srcs = ["src/index.ts"],
        prodmode_target = "esnext",
        deps = js_dependencies,
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
              "tmp=$$(mktemp); " +
              "sed '/.*PRESERVE_COMMENT_ABOVE.*/d' $@ > $$tmp && cat $$tmp > $@; " +  # it isn't possible to have tsc preserve some comments
              "sed 's/export const/const/g' $@ > $$tmp && cat $$tmp > $@; " +
              "sed 's/export {.*};//g' $@ > $$tmp && cat $$tmp > $@; " +
              "sed '/^\\s*\\/\\/ @ts-.*/d' $@ > $$tmp && cat $$tmp > $@; " +
              "sed 's/\\/\\/ @ts-.*//g' $@ > $$tmp && cat $$tmp > $@; ",
    )

    native.genrule(
        name = "sample_js",
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
    if not has_runtime_dependency:
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
                  "tmp=$$(mktemp); " +
                  "$(location //rules:strip_region_tags_bin) $@; " +
                  "sed \"s/YOUR_API_KEY/$${}/g\" $@ > $$tmp && cat $$tmp > $@; ".format(YOUR_API_KEY) +
                  "$(location //rules:prettier) --write $@; ",
            tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
            visibility = ["//visibility:public"],
        )

        native.genrule(
            name = "jsfiddle_js",
            outs = [":jsfiddle.js"],
            cmd = "sed  \"s/YOUR_API_KEY/$${}/g\" $(location :index.js) > $@; ".format(YOUR_API_KEY) +
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

    if not has_runtime_dependency:
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
              "tmp=$$(mktemp); " +
              "sed 's/data-inline//g' $@ > $$tmp && cat $$tmp > $@; " +
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
        srcs = [":_index.html"],
        outs = ["index.html"],
        cmd = "sed \"s/YOUR_API_KEY/$${}/g\" $(location :_index.html) > $@; ".format(YOUR_API_KEY),
    )

    ###### START IFRAME ######
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

    native.genrule(
        name = "_replaced_key_ts",
        srcs = [":src/index.ts"],
        outs = ["_replaced_key_index.ts"],
        cmd = "sed \"s/YOUR_API_KEY/$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $(location :src/index.ts) > $@; ",
    )
    webpack(
        name = "iframe_bundle",
        outs = ["iframe.js"],
        args = [
            "--mode production",
            "--env SKIP_HTML",
            "--entry",
            "./$(execpath :_replaced_key_index.ts)",
            "--config",
            "./$(execpath //shared:webpack.config.js)",
            "-o $(@D)",
            "--output-filename iframe.js",
        ],
        data = [
            ":_replaced_key_index.ts",
            # config
            "//shared:webpack.config.js",
            "//:tsconfig.json",
            # plugins
        ] + js_dependencies + webpack_dependencies,
        visibility = ["//visibility:public"],
    )

    # the iframe output does not have any html, head, body tags. this is a consequence of Google's documentation site
    native.genrule(
        name = "iframe_html",
        srcs = [":_iframe.html", ":iframe.js", ":style.css"],
        outs = ["iframe.html"],
        cmd = "$(location //rules:inline) $(location :_iframe.html) $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "tmp=$$(mktemp); " +
              "sed \"s/YOUR_API_KEY/$${}/g\" $@ > $$tmp && cat $$tmp > $@; ".format(YOUR_API_KEY) +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:inline", "//rules:strip_region_tags_bin", "//rules:prettier"],
        visibility = ["//visibility:public"],
    )
    ###### END IFRAME ######

    ###### START GITHUB ######
    # Note: uses same iframe.js but different html template
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
              "tmp=$$(mktemp); " +
              "sed \"s/YOUR_API_KEY/$${}/g\" $@ > $$tmp && cat $$tmp > $@; ".format(YOUR_API_KEY) +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:inline", "//rules:prettier", "//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    ###### END GITHUB ######

    ###### START APP ######
    native.genrule(
        name = "app_env",
        srcs = ["//shared:env.tpl"],
        outs = ["app/.env"],
        cmd = "sed \"s/YOUR_API_KEY/$${}/g\" $(location //shared:env.tpl) > $@;".format("GOOGLE_MAPS_JS_SAMPLES_SANDBOX_KEY"),
    )

    native.genrule(
        name = "app_html",
        srcs = [":sample.html"],
        outs = ["app/src/index.html"],
        cmd = "cat $(location :sample.html) >$@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
    )

    native.genrule(
        name = "app_ts",
        srcs = [":src/index.ts"],
        outs = ["app/src/index.ts"],
        cmd = "cat $(location :src/index.ts) > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "tmp=$$(mktemp); " +
              "sed '16 i /* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */' $@ > $$tmp && cat $$tmp > $@; " +
              "sed '17 i import \"./style.css\";' $@ > $$tmp && cat $$tmp > $@; " +
              "sed '/.*PRESERVE_COMMENT_ABOVE.*/d' $@ > $$tmp && cat $$tmp > $@; " +  # it isn't possible to have tsc preserve some comments
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
    )

    native.genrule(
        name = "app_css",
        srcs = [":style.css"],
        outs = ["app/src/style.css"],
        cmd = "cat $(location :style.css) > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:prettier", "//rules:strip_region_tags_bin"],
    )

    package(
        out = "app/package.json",
        devDependencies = devDependencies + webpack_serve_dependencies,
        dependencies = dependencies,
        name = name,
    )

    template_file(
        name = "cloud-shell-instructions",
        out = "CLOUD_SHELL_INSTRUCTIONS.md",
        template = "//shared:cloud_shell_instructions.tpl.md",
        substitutions = {"TMPL_SAMPLE": name},
    )

    copy_file(name = "readme", src = "//shared:README.md", out = "app/README.md")
    copy_file(name = "webpack-config", src = "//shared:webpack.config.js", out = "app/webpack.config.js")
    copy_file(name = "tsconfig", src = "//:tsconfig.json", out = "app/tsconfig.json")
    copy_file(name = "sandbox-config", src = "//shared:sandbox.config.json", out = "app/sandbox.config.json")
    copy_file(name = "gitpod", src = "//shared:.gitpod.yml", out = "app/.gitpod.yml")
    copy_file(name = "gitignore", src = "//shared:.gitignore", out = "app/.gitignore")

    native.filegroup(
        name = "package",
        srcs = [
            ":app_env",
            ":app_css",
            ":app_html",
            ":app_ts",
            ":app/package.json",
            ":readme",
            ":webpack-config",
            ":tsconfig",
            ":sandbox-config",  # code sandbox does not support webpack and the parcel template has issues with async/callback scripts
            ":gitpod",
            ":gitignore",
        ],
        visibility = ["//visibility:public"],
    )

    pkg_tar(
        name = "{}-package".format(name),
        srcs = [":package"],
        strip_prefix = ".",
        extension = "tgz",
        mode = "0755",
        remap_paths = {"/app": ""},
        #     "/app/src/index.ts": "src/index.ts",
        #     "/app/src/index.html": "src/index.html",
        #     "/app/src/style.css": "src/style.css",
        #     "/app/.env": ".env",
        #     "/app/package.json": "package.json",
        #     "/app"
        # }
    )
    ###### END APP ######

    html_output_files = [
        ":github.html",  # for development and googlemaps.github.io
        ":sample.html",  # for developers.google.com *html* tab
        ":iframe.html",  # for developers.google.com iframe
    ]

    js_output_files = [
        ":index.js",
    ]

    if not has_runtime_dependency:
        html_output_files += [
            ":jsfiddle.html",
            ":inline.html",  # for developers.google.com *all* tab
        ]

        js_output_files.append(":jsfiddle.js")

    native.filegroup(
        name = "js",
        srcs = js_output_files,
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "html",
        srcs = html_output_files,
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
            ":package",
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

    js_test(name = "test_index_js", file = ":index.js")
    js_test(name = "test_app_ts", file = ":app_ts")

    native.genrule(
        name = "package_test",
        srcs = [":{}-package.tgz".format(name)],
        cmd = "set -x; " +
              "tmp=`mktemp -d`; " +
              "tar xf $(location :{}-package.tgz) -C $$tmp; ".format(name) +
              "pushd $$tmp; " +
              "npm i; " +
              "npm run build; " +
              "popd; " +
              "cat $$tmp/public/index.js > $@",
        local = 1,
        tags = ["manual", "package"],
        outs = ["index.webpack.js"],
    )

    concatjs_devserver(
        name = "devserver",
        deps = [":iframe.js"],
        serving_path = "/index.js",
        static_files = [":index.html", ":style.css"],
        port = 8080,
    )
