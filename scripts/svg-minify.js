"use strict";
/*
 * SVG-MINIFY SCRIPT
 *
 * A script to remove whitespace from all of the .svg files
 * in the build folder.
 *
 * Editing this file:
 * After making an edit to this file, make sure to run:
 * tsc scripts/svg-minify.ts
 * in the top-level directory.
 */
exports.__esModule = true;
var fs = require("fs");
var jsdom = require("jsdom");
console.log("Minifying svgs...");
var mediaDir = fs.opendirSync("./build/static/media");
var svgs = [];
for (var entry = mediaDir.readSync(); entry != null; entry = mediaDir.readSync()) {
    if (entry.isFile() && entry.name.endsWith(".svg")) {
        svgs.push(entry.name);
    }
}
mediaDir.closeSync();
svgs.forEach(function (svg) {
    var filename = "./build/static/media/" + svg;
    var fileContents = fs.readFileSync(filename);
    // remove whitespaces from text content of file
    var dom = new jsdom.JSDOM(fileContents, {
        contentType: "image/svg+xml",
        runScripts: "outside-only"
    });
    var svgElement = dom.window.document.querySelector("svg");
    console.log("Minifying " + svg + "...");
    for (var i = 0; i < svgElement.children.length; i++) {
        var child = svgElement.children.item(i);
        if (child.innerHTML != "") {
            child.innerHTML = child.innerHTML.replace(/\n|\t| /g, "");
        }
    }
    // remove newlines and tabs from entirety of file
    // preserve spaces as required for tag names and properties
    var fileAsString = dom.serialize();
    var noNewlines = fileAsString.replace(/\n|\t/g, "");
    // remove spaces from between tags
    var noSpacesBetween = "";
    var doRemoveSpaces = false;
    for (var i = 0; i < noNewlines.length; i++) {
        var currentChar = noNewlines.charAt(i);
        if (currentChar === ">") { // a tag just ended
            doRemoveSpaces = true;
        }
        if (currentChar === "<") { // a tag just started
            doRemoveSpaces = false;
        }
        if (!doRemoveSpaces || currentChar !== " ") {
            noSpacesBetween = noSpacesBetween.concat(currentChar);
        }
    }
    fs.writeFileSync(filename, noSpacesBetween);
    console.log("Minified " + svg + ".");
});
