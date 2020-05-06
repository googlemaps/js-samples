var fs = require("fs");
var inline = require("web-resource-inliner");
var path = require("path");

function normalize(contents) {
    return process.platform === "win32" ? contents.replace(/\r\n/g, "\n") : contents;
}

function readFile(file) {
    return normalize(fs.readFileSync(file, "utf8"));
}

function writeFile(file, data) {
    return fs.writeFileSync(file, normalize(data));
}

function main(args) {
    let src = args[2];
    let out = args[3];
    
    inline.html({
        fileContent: readFile(src),
        relativeTo: path.dirname(src),
        // only inline elements having data-inline
        scripts: false,
        images: false,
        links: false,
        svg: false
    },
        function (err, result) {
            if (!err) {
                writeFile(out, result);
            } else {
                throw err;
            }
        }
    );

}

main(process.argv)
