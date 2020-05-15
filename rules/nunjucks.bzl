
def nunjucks(name, outs, template, json, data):
    # this genrule moves the generated html file to the correct location
    # nunjucks-cli does not allow specifying a single output file
    # nunjucks-cli converts the .njk to a .html by default
    native.genrule(
        name = name,
        srcs = data,
        tools = ["//rules:nunjucks", "//rules:nunjucks-cli"],
        cmd = "$(location //rules:nunjucks) $(location {template}) $(location {json}) $(location //rules:nunjucks-cli) $@".format(template = template, json = json),
        outs = outs,
        visibility = ["//visibility:public"],
    )
