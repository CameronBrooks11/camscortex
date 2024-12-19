const fs = require("fs");
const path = require("path");

const journalFolder = path.join(__dirname, "journals");
const indexFile = path.join(journalFolder, "journals.md");

// Read all journal files
const journalFiles = fs
  .readdirSync(journalFolder)
  .filter((file) => file.endsWith(".md") && file !== "journals.md")
  .sort((a, b) => new Date(b.split(".")[0]) - new Date(a.split(".")[0])); // Sort by date descending

// Create the index content
const content = [
  "# Journal Index",
  "",
  ...journalFiles.map((file) => `- [[${file.replace(".md", "")}]]`),
  "",
].join("\n");

// Write the updated index file
fs.writeFileSync(indexFile, content, "utf8");
console.log("Journal index updated!");
