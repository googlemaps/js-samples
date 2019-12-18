def _strip_region_tags_impl(ctx):
    STRIP_REGION_TAGS_CMD = """
        cp $1 $2

        sed -i 's/\\/\\/ \\[START[A-Z_]* .*\\]//g' $2
        sed -i 's/\\/\\/ \\[END[A-Z_]* .*\\]//g' $2
        sed -i 's/<\\!-- \\[START[A-Z_]* .*\\] -->//g' $2
        sed -i 's/<\\!-- \\[END[A-Z_]* .*\\] -->//g' $2
    """
    in_file = ctx.file.input
    out_file = ctx.outputs.output

    ctx.actions.run_shell(
        outputs = [out_file],
        inputs = [in_file],
        arguments = [in_file.path, out_file.path],
        command = STRIP_REGION_TAGS_CMD,
    )

strip_region_tags = rule(
    implementation = _strip_region_tags_impl,
    attrs = {
        "input": attr.label(
            allow_single_file = True,
            mandatory = True,
            doc = "The file to strip region trags from",
        ),
        "output": attr.output(doc = "The output file"),
    },
    doc = "Transforms a file by removing region tags.",
)
