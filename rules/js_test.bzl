load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

def js_test(name, file):
    nodejs_test(
        name = name,
        data = ["//rules:js_test.js", "@npm//expect", file],
        entry_point = "//rules:js_test.js",
        templated_args = ["$(rootpath {})".format(file)],
    )
