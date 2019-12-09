load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")
load("@npm//@babel/cli:index.bzl", "babel")
load("@build_bazel_rules_nodejs//:index.bzl", "pkg_web")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
load("//rules:nunjucks.bzl", "nunjucks")

def sample():
    rollup_bundle(
        name = "app",
        srcs = ["src/index.js"],
        entry_point = "src/index.js",
        config_file = "//:rollup.config.js",
        format = "iife",
        sourcemap = "false",
        visibility = ["//visibility:public"],
    )

    babel(
        name = "transpiled",
        args = [
            "$(location :app)",
            "--out-file",
            "$@/transpiled.js",
        ],
        data = [
            ":app",
            "@npm//@babel/preset-env",
            "//:babel.config.json",
        ],
        outs = ["transpiled.js"],
        visibility = ["//visibility:public"],
    )

    sass_binary(
        name = "_css",
        src = "src/style.scss",
        deps = [
            "//shared/scss:default",
        ],
        output_name = "style.css",
        sourcemap = False,
        output_style = "expanded",
        visibility = ["//visibility:public"],
    )

    nunjucks()

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
