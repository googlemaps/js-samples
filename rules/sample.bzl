load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")
load("@npm//@babel/cli:index.bzl", "babel")
load("@build_bazel_rules_nodejs//:index.bzl", "pkg_web")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
load("//rules:nunjucks.bzl", "nunjucks")
load("//rules:strip_region_tags.bzl", "strip_region_tags")

def sample():
    """ generates the various outputs"""
    strip_region_tags(
        name = "_js_without_region_tags",
        input = ":src/index.js",
        output = "_without_region_tags.js",
    )

    rollup_bundle(
        name = "app_ugly",
        srcs = [":_js_without_region_tags"],
        entry_point = "_without_region_tags.js",
        config_file = "//:rollup.config.js",
        format = "iife",
        sourcemap = "false",
        visibility = ["//visibility:public"],
    )

    babel(
        name = "transpiled",
        args = [
            "$(location :app_ugly)",
            "--out-file",
            "$@",
        ],
        data = [
            ":app_ugly",
            "@npm//@babel/preset-env",
            "//:babel.config.json",
        ],
        outs = ["transpiled_ugly.js"],
        visibility = ["//visibility:public"],
    )

    sass_binary(
        name = "_css",
        src = "src/style.scss",
        deps = [
            "//shared/scss:default",
        ],
        output_name = "style_ugly.css",
        sourcemap = False,
        output_style = "expanded",
        visibility = ["//visibility:public"],
    )

    native.genrule(
        name = "_data_file",
        cmd = "$(location //rules:json) -f $(location data.json) -e \"this.key='$$GOOGLE_MAPS_JS_SAMPLES_KEY'\" > $@",
        srcs = [":data.json"],
        tools = ["//rules:json"],
        outs = ["_data.json"],
    )

    ## jsfiddle output
    native.genrule(
        name = "_data_jsfiddle_file",
        cmd = "$(location //rules:json) -f $(location _data.json) -e 'this.jsfiddle=true' > $@",
        srcs = [":_data.json"],
        tools = ["//rules:json"],
        outs = ["_data_jsfiddle.json"],
    )

    nunjucks(
        name = "_html_jsfiddle",
        template = ":src/index.njk",
        json = ":_data_jsfiddle.json",
        data = [
            ":src/index.njk",
            ":_data_jsfiddle.json",
            "//shared:templates",
        ],
        outs = ["_jsfiddle.html"],
    )

    strip_region_tags(
        name = "_html_strip_region_tags",
        input = ":_jsfiddle.html",
        output = "jsfiddle_ugly.html",
    )

    ## normal index.html output
    nunjucks(
        name = "_html",
        template = ":src/index.njk",
        json = ":_data.json",
        data = [
            ":src/index.njk",
            ":_data.json",
            "//shared:templates",
        ],
        outs = ["index_ugly.html"],
    )

    for src, out in [
        (":index_ugly.html", "index.html"),
        (":jsfiddle_ugly.html", "jsfiddle.html"),
        (":style_ugly.css", "style.css"),
        (":transpiled_ugly.js", "transpiled.js"),
        (":app_ugly.js", "app.js"),
    ]:
        native.genrule(
            name = "prettier_" + src.replace(":", "").split(".")[0],
            srcs = [src],
            outs = [out],
            cmd = "$(location //rules:prettier) $(location {}) > $@".format(src),
            tools = ["//rules:prettier"],
        )

    native.filegroup(
        name = "js",
        srcs = [
            ":transpiled.js",
            ":app.js",
        ],
        visibility = ["//visibility:public"],
    )

    native.filegroup(
        name = "html",
        srcs = [
            ":index.html",
            ":jsfiddle.html",
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
