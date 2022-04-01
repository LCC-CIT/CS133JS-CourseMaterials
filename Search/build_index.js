// This code is based on code from https://github.com/BLE-LTER/Lunr-Index-and-Search-for-Static-Sites
// Adapted by Brian Bird, winter 2022, revised spring 2022

var path = require("path");
var fs = require("fs");
var lunr = require("lunr");
var cheerio = require("cheerio");


// Change these constants to suit your needs
const HTML_FOLDER = "../"; // folder with your HTML files
// Valid search fields: "title", "description", "keywords", "body"
const SEARCH_FIELDS = ["heading", "description", "body", "keywords"];
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

    // Remove the table of weekly topics from lecture notes
    $("table:first").remove();

    // If the title or heading don't exisit I will use the filename without extension.
    var fileName = file.split("/").pop();
    fileName = fileName.split(".")[0];

    // use the content of the first h1 for heading. Typora export puts it in a span
    var heading = $("h1:first").text();
    var title = $("title").text(); // get the HTML title element.
    // Typora export to HTML uses file names as titles by default. 
    // I want to replace those with the heading,.
    if (title == fileName && typeof heading != 'undefined')
        title = heading;
    // if there is no heading, use the title, and vice versa
    if (typeof heading == 'undefined' && typeof title != 'undefined')
        heading = title;
    else if (typeof heading != 'undefined' && typeof title == 'undefined')
        title = heading;

    var description = $("meta[name=description]").attr("content");
    // Typora export to HTML puts ${description} in empty title meta tags
    if (description == '${description}' || typeof description == 'undefined')
        description = ""; // no valid metadata description was found

    var keywords = $("meta[name=keywords]").attr("content");
    if (keywords == '${keywords}' || typeof description == 'undefined')
        keywords = ""; // no valid keywords metadata was found

    var material = $("meta[name=material]").attr("content");
    if (material == '${material}' || typeof material == 'undefined')
        material = ""; // no valid doctype metadata was found    


    var body = $("body").text();
    if (typeof body == 'undefined') body = "";
    var time = $("time").text();
    if (typeof time == 'undefined') time = "";
    var data = {
        "id": fileId,
        "link": file,
        "m": material,
        "t": title,
        "h": heading,
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
            "m": doc["m"],
            "time": doc["time"],
            "h": doc["h"],
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