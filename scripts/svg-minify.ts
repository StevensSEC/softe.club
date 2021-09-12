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

svgs.forEach(async svg => {
    const filename = `./build/static/media/${svg}`
    // remove whitespaces from text content of file
    const dom =  await jsdom.JSDOM.fromFile(filename, {
        contentType: "text/xml", // for some reason it does not like image/svg+xml
        runScripts: "outside-only"}
        )
    console.log(`Trying to minify ${svg}`)
    
    const getTextContent = () : string => {return dom.window._document.querySelector("svg").textContent}
    const setTextContent = (text : string) => {dom.window._document.querySelector("svg").textContent = text}

    let updatedText = getTextContent().replace(/\n|\t| /g, "")
    setTextContent(updatedText);
    
    // remove newlines and tabs from entirety of file
    // preserve spaces as required for tag names and properties
    const fileAsString = dom.serialize()
    let update = fileAsString.replace(/\n|\t/g, "")
    fs.writeFileSync(filename, update)

    console.log(`Minified ${svg}.`)
});