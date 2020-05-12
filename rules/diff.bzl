load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

def diff_test(name, actual, expected):
    nodejs_test(
        name = name,
        data = ["//rules:diff.js", "@npm//jest-diff", actual, expected],
        entry_point = "//rules:diff.js",
        templated_args = ["$(rootpath {}) $(rootpath {})".format(actual, expected)],
    )
