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

import * as fs from "fs"
import * as jsdom from "jsdom"

console.log("Minifying svgs...")

let mediaDir = fs.opendirSync("./build/static/media");

let svgs : string[] = []
for (let entry = mediaDir.readSync(); entry != null; entry = mediaDir.readSync()){
   if (entry.isFile() && entry.name.endsWith(".svg")) {
       svgs.push(entry.name);
   }
}
mediaDir.closeSync()

svgs.forEach(svg => {
    const filename = `./build/static/media/${svg}`
    const fileContents = fs.readFileSync(filename)
    
    // remove whitespaces from text content of file
    const dom =  new jsdom.JSDOM(fileContents, {
        contentType: "text/xml", // for some reason it does not like image/svg+xml
        runScripts: "outside-only"}
        )
    const svgElement = dom.window.document.querySelector("svg")
    console.log(`Minifying ${svg}...`)

    for (let i = 0; i < svgElement.children.length; i++) {
        let child = svgElement.children.item(i)
        if (child.innerHTML != "") {
            child.innerHTML = child.innerHTML.replace(/\n|\t| /g, "");
        }
    }

    // remove newlines and tabs from entirety of file
    // preserve spaces as required for tag names and properties
    const fileAsString = dom.serialize()
    const noNewlines = fileAsString.replace(/\n|\t/g, "")

    // remove spaces from between tags
    let noSpacesBetween = ""
    let doRemoveSpaces = false
    for (let i = 0; i < noNewlines.length; i++) {
        const currentChar = noNewlines.charAt(i)
        if (currentChar === ">") { // a tag just ended
            doRemoveSpaces = true
        }
        if (currentChar === "<") { // a tag just started
            doRemoveSpaces = false
        }
        if (!doRemoveSpaces || currentChar !== " ") {
            noSpacesBetween = noSpacesBetween.concat(currentChar)
        }
    }

    fs.writeFileSync(filename, noSpacesBetween)

    console.log(`Minified ${svg}.`)
});