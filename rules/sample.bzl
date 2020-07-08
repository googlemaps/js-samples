load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
load("//rules:nunjucks.bzl", "nunjucks")
load("//rules:prettier.bzl", "prettier")

def sample():
    """ generates the various outputs"""
    native.genrule(
        name = "_app_without_region_tags",
        srcs = [":src/index.js"],
        outs = ["_app_without_region_tags.js"],
        cmd = "cat $(location :src/index.js) > $@; " +
              "$(location //rules:strip_region_tags_bin) $@; " +
              "$(location //rules:remove_apache_license) $@; ",
        tools = ["//rules:strip_region_tags_bin", "//rules:remove_apache_license"],
    )

    rollup_bundle(
        name = "iframe",
        srcs = [":_app_without_region_tags.js"],
        entry_point = "_app_without_region_tags.js",
        config_file = "//:rollup.config.iframe.js",
        format = "iife",
        sourcemap = "false",
        visibility = ["//visibility:public"],
        deps = [
            "@npm//@babel/core",
            "@npm//@babel/preset-env",
            "@npm//@rollup/plugin-babel",
        ],
    )

    rollup_bundle(
        name = "_app",
        srcs = [":_app_without_region_tags.js"],
        entry_point = "_app_without_region_tags.js",
        config_file = "//:rollup.config.js",
        format = "iife",
        sourcemap = "false",
        visibility = ["//visibility:public"],
        deps = [
            "@npm//@babel/core",
            "@npm//@babel/preset-env",
            "@npm//@rollup/plugin-babel",
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
        ],
        output_name = "_style.css",
        sourcemap = False,
        output_style = "expanded",
        visibility = ["//visibility:public"],
    )

    for src, out in [
        (":_style.css", "style.css"),
        (":_app.js", "app.js"),
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
              "sed -i'.bak' 's/key=YOUR_API_KEY/key=/g' $@; " +
              "$(location //rules:prettier) --write $@; ",
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
              "sed -i'.bak' \"s/key=YOUR_API_KEY/key=$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $@; " +
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
              "sed -i'.bak' \"s/key=YOUR_API_KEY/key=$${GOOGLE_MAPS_JS_SAMPLES_KEY}/g\" $@; " +
              "$(location //rules:prettier) --write $@; ",
        tools = ["//rules:inline", "//rules:prettier", "//rules:strip_region_tags_bin"],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "js",
        srcs = [
            ":app.js",
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
        ],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "inputs",
        srcs = ["src/index.js", "src/style.scss", "src/index.njk"],
        visibility = ["//visibility:public"],
    )
