// This code is based on code from https://github.com/BLE-LTER/Lunr-Index-and-Search-for-Static-Sites
// Adapted by Brian Bird, spring 2022

var path = require("path");
var fs = require("fs");
var lunr = require("lunr");
var cheerio = require("cheerio");


// Change these constants to suit your needs
const HTML_FOLDER = "../"; // folder with your HTML files
// Valid search fields: "title", "description", "keywords", "body"
const SEARCH_FIELDS = ["title", "body", "time"];
const EXCLUDE_FILES = ["Search.html", "Archive", "jquery1Start", "jquery2Start", "Experiments", "Examples", "Practice"];
const MAX_PREVIEW_CHARS = 275; // Number of characters to show for a given search result
const OUTPUT_INDEX = "lunr_index.js"; // Index file


function isHtml(filename) {
    lower = filename.toLowerCase();
    return (lower.endsWith(".htm") || lower.endsWith(".html"));
}


function findHtml(folder) {
    if (!fs.existsSync(folder)) {
        console.log("Could not find folder: ", folder);
        return;
    }

    var files = fs.readdirSync(folder);
    var htmls = [];
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(folder, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            if (!EXCLUDE_FILES.includes(files[i])) // check for an excluded folder
            {
                var recursed = findHtml(filename);
                for (var j = 0; j < recursed.length; j++) {
                    recursed[j] = path.join(files[i], recursed[j]).replace(/\\/g, "/");
                }
                htmls.push.apply(htmls, recursed);
            }
        } else if (isHtml(filename) && !EXCLUDE_FILES.includes(files[i])) {
            htmls.push(files[i]);
        }
    }
    return htmls;
}


function readHtml(root, file, fileId) {
    var filename = path.join(root, file);
    var txt = fs.readFileSync(filename).toString();
    var $ = cheerio.load(txt);
    // Remove the table of weekly topics
    $("table:first").remove();
    var title = $("title").text();
    // Typora uses file names as titles by default. I want to replace these titles
    var fileTitle = file.split("/").pop();
    fileTitle = fileTitle.split(".")[0];
    if (typeof title == 'undefined' || title == fileTitle) {
        // use the content of the first heading--Typora export puts it in a span
        title = $("h1:first").text();
        if (typeof title == 'undefined') title = file;
    }
    var description = $("meta[name=description]").attr("content");
    if (description == '${description}' || typeof description == 'undefined')
        description = ""; // no valid YAML description was found
    var keywords = $("meta[name=keywords]").attr("content");
    if (keywords == '${keywords}' || typeof description == 'undefined')
        keywords = ""; // no valid YAML keywords were found
    var body = $("body").text();
    if (typeof body == 'undefined') body = "";
    var time = $("time").text();
    if (typeof time == 'undefined') time = "";
    var data = {
        "id": fileId,
        "link": file,
        "t": title,
        "d": description,
        "k": keywords,
        "b": body,
        "time": time // HTML <time> is used for date in my lecture notes.
    };
    return data;
}


function buildIndex(docs) {
    var idx = lunr(function() {
        this.ref('id');
        for (var i = 0; i < SEARCH_FIELDS.length; i++) {
            this.field(SEARCH_FIELDS[i].slice(0, 1));
        }
        docs.forEach(function(doc) {
            this.add(doc);
        }, this);
    });
    return idx;
}


function buildPreviews(docs) {
    var result = {};
    for (var i = 0; i < docs.length; i++) {
        var doc = docs[i];
        var preview = doc["d"];
        // If the description is short, append from body
        if (preview.length < MAX_PREVIEW_CHARS * .5) {
            preview += " " + doc["b"];
        }
        if (preview.length > MAX_PREVIEW_CHARS)
            preview = preview.slice(0, MAX_PREVIEW_CHARS) + " ...";
        result[doc["id"]] = {
            "time": doc["time"],
            "t": doc["t"],
            "p": preview,
            "l": doc["link"]
        };
    }
    return result;
}


function main() {
    files = findHtml(HTML_FOLDER);
    var docs = [];
    console.log("Building index for these files:");
    for (var i = 0; i < files.length; i++) {
        console.log("    " + files[i]);
        docs.push(readHtml(HTML_FOLDER, files[i], i));
    }
    var idx = buildIndex(docs);
    var previews = buildPreviews(docs);
    var js = "const LUNR_DATA = " + JSON.stringify(idx) + ";\n" +
        "const PREVIEW_LOOKUP = " + JSON.stringify(previews) + ";";
    fs.writeFile(OUTPUT_INDEX, js, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Index saved as " + OUTPUT_INDEX);
    });
}

main();