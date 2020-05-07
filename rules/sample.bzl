load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")
load("@npm//@babel/cli:index.bzl", "babel")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
load("//rules:nunjucks.bzl", "nunjucks")
load("//rules:strip_region_tags.bzl", "strip_region_tags")
load("//rules:prettier.bzl", "prettier")

def _set_data_field(name, src, out, field, value):
    native.genrule(
        name = name,
        cmd = "./$(location //rules:json) -f $(location {}) -e 'this.{}={}' > $@".format(src, field, value),
        srcs = [src],
        tools = ["//rules:json"],
        outs = [out],
    )

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
            "-f",
            "$(location //:.babelrc)",
            "--out-file",
            "$@",
        ],
        data = [
            ":app_ugly",
            "@npm//@babel/preset-env",
            "//:.babelrc",
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
    _set_data_field(
        name = "_data_jsfiddle_file",
        src = ":_data.json",
        out = "_data_jsfiddle.json",
        field = "jsfiddle",
        value = "true",
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
        name = "_jsfiddle_strip_region_tags",
        input = ":_jsfiddle.html",
        output = "jsfiddle_ugly.html",
    )

    for src, out in [
        (":jsfiddle_ugly.html", "jsfiddle.html"),
        (":style_ugly.css", "style.css"),
        (":transpiled_ugly.js", "transpiled.js"),
    ]:
        prettier(
            src = src,
            out = out,
        )

    ## index
    _set_data_field(
        name = "_data_index_file",
        src = ":_data.json",
        out = "_data_index.json",
        field = "inline",
        value = "true",
    )

    nunjucks(
        name = "_index_rendered",
        template = ":src/index.njk",
        json = ":_data_index.json",
        data = [
            ":src/index.njk",
            ":_data_index.json",
            "//shared:templates",
        ],
        outs = ["_index_rendered.html"],
    )

    native.genrule(
        name = "_index_with_tags",
        srcs = [":_index_rendered.html", ":transpiled.js", ":style.css"],
        outs = ["_index_with_tags.html"],
        cmd = "$(location //rules:inline) $(location :_index_rendered.html) $@",
        tools = ["//rules:inline"],
    )

    strip_region_tags(
        name = "_index_rendered_no_tags",
        input = ":_index_with_tags.html",
        output = "_index_rendered_no_tags.html",
    )

    prettier(
        src = "_index_rendered_no_tags.html",
        out = "index.html",
    )

    native.filegroup(
        name = "js",
        srcs = [
            ":transpiled.js",
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
