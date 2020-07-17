load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

def tags_test(name, file):
    nodejs_test(
        name = name,
        data = ["//rules:tags.js", "@npm//expect", file],
        entry_point = "//rules:tags.js",
        templated_args = ["$(rootpath {})".format(file)],
    )
