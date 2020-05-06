load("@npm//nunjucks-cli:index.bzl", npm_nunjucks = "nunjucks")
load("//rules:strip_region_tags.bzl", "strip_region_tags")

def nunjucks(name, outs, template, json, data):
    intermediate = "_" + name

    npm_nunjucks(
        name = intermediate,
        args = [
            "$(location {})".format(template),
            "-p",
            ".",
            "$(location {})".format(json),
            "--out",
            "$(@D)",
        ],
        data = data,
        output_dir = True,
    )

    # this genrule moves the generated html file to the correct location
    # nunjucks-cli does not allow specifying a single output file
    # nunjucks-cli converts the .njk to a .html by default
    native.genrule(
        name = name,
        srcs = [intermediate],
        cmd = "cat $(location {})/{}/src/index.html > $@".format(intermediate, native.package_name()),
        outs = outs,
        visibility = ["//visibility:public"],
    )
