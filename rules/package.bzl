def package(out, name, dependencies = [], devDependencies = []):
    native.genrule(
        name = "package_json",
        srcs = ["//:package.json"],
        outs = [out],
        cmd = "$(execpath //rules:package) " +
            "--root $(location //:package.json) " +
            "--dependencies {} ".format(" ".join(dependencies)) +
            "--devDependencies {} ".format(" ".join(devDependencies)) +
            "--name {} ".format(name) +
            "--out $@ ",
        tools = ["//rules:package"],
    )
