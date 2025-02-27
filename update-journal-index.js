const fs = require("fs");
const path = require("path");

const journalFolder = path.join(__dirname, "journals");
const indexFile = path.join(journalFolder, "journals.md");

// Read all journal files
const journalFiles = fs
  .readdirSync(journalFolder)
  .filter((file) => file.endsWith(".md") && file !== "journals.md")
  .sort((a, b) => new Date(b.split(".")[0]) - new Date(a.split(".")[0])); // Sort by date descending

// Create the journal index content
const journalLinks = journalFiles.map((file) => {
  const date = file.replace(".md", ""); // Remove .md from filename
  return `- [[${date}]]`;
});

// Create the autogenerated wikilink references
const wikilinkRefs = journalFiles
  .map((file) => {
    const date = file.replace(".md", ""); // Remove .md from filename
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return `[${date}]: ${date} "Journal Entry, ${formattedDate}"`;
  })
  .join("\n");

// Combine everything into the final content
const content = `
# Journal Index

${journalLinks.join("\n")}

[//begin]: # "Autogenerated link references for markdown compatibility"
${wikilinkRefs}
[//end]: # "Autogenerated link references"
`;

// Write to the index file
fs.writeFileSync(indexFile, content.trim() + "\n", "utf8");
console.log("Journal index and wikilink references updated!");
