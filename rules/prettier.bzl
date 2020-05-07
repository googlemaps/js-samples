def prettier(src, out):
    native.genrule(
        name = "prettier_" + src.replace(":", "").split(".")[0],
        srcs = [src],
        outs = [out],
        cmd = "./$(location //rules:prettier) $(location {}) > $@".format(src),
        tools = ["//rules:prettier"],
    )
