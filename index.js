const fs = require("fs");

function translateReference(input) {
  const parts = input.split("/");
  const title = parts[0].trim();
  const authorsSet = parts[1].trim();
  const journalInfo = parts[3].trim();

  // Extracting the authors
  const authors = authorsSet
    .trim()
    .split(",")
    .map((author) => author.trim());

  // Reconstructing the output in the desired format
  const formattedAuthors = authors
    .map((author) => {
      const authorChain = author.trim().split(".");
      const updAuthor = `${authorChain[2].trim()} ${authorChain[0].trim()}. ${authorChain[1].trim()}.`;
      return updAuthor;
    })
    .join(", ");
  const result = `${formattedAuthors} ${title}. ${journalInfo}`;

  return result;
}

// Reading input from input.txt
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input.txt:", err);
    return;
  }

  // Translating the reference
  const output = translateReference(data.trim());

  // Writing the output to output.txt
  fs.writeFile("output.txt", output, (err) => {
    if (err) {
      console.error("Error writing to output.txt:", err);
    } else {
      console.log("Translation written to output.txt successfully!");
    }
  });
});
