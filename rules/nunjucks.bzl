def nunjucks(name, outs, template, json, data, mode):
    # this genrule moves the generated html file to the correct location
    # nunjucks-cli does not allow specifying a single output file
    # nunjucks-cli converts the .njk to a .html by default
    native.genrule(
        name = name,
        srcs = data,
        tools = ["//rules:nunjucks", "//rules:nunjucks-cli", "//rules:json"],
        cmd = "$(location //rules:nunjucks) $(location {template}) $(location {json}) $(location //rules:nunjucks-cli) {mode} $@".format(template = template, json = json, mode = mode),
        outs = outs,
        visibility = ["//visibility:public"],
    )
