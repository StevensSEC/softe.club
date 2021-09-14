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
let fs = require("fs");
let jsdom = require("jsdom");
console.log("Minifying svgs...");
let mediaDir = fs.opendirSync("./build/static/media");
let svgs = [];
for (let entry = mediaDir.readSync(); entry != null; entry = mediaDir.readSync()) {
    if (entry.isFile() && entry.name.endsWith(".svg")) {
        svgs.push(entry.name);
    }
}
mediaDir.closeSync();
svgs.forEach(function (svg) {
    let filename = "./build/static/media/" + svg;
    let fileContents = fs.readFileSync(filename);
    // remove whitespaces from text content of file
    let dom = new jsdom.JSDOM(fileContents, {
        contentType: "image/svg+xml",
        runScripts: "outside-only"
    });
    let svgElement = dom.window.document.querySelector("svg");
    console.log("Minifying " + svg + "...");
    for (var i = 0; i < svgElement.children.length; i++) {
        let child = svgElement.children.item(i);
        if (child.innerHTML != "") {
            child.innerHTML = child.innerHTML.replace(/\n|\t| /g, "");
        }
    }
    // remove newlines and tabs from entirety of file
    // preserve spaces as required for tag names and properties
    let fileAsString = dom.serialize();
    let noNewlines = fileAsString.replace(/\n|\t/g, "");
    // remove spaces from between tags
    let noSpacesBetween = "";
    let doRemoveSpaces = false;
    for (var i = 0; i < noNewlines.length; i++) {
        let currentChar = noNewlines.charAt(i);
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
