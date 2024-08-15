const fs = require("fs").promises;
const { parseKeyValue } = require("./src/helpers/parseKeyValue");

async function updateReferences() {
  try {
    // Parse key-value pairs from matches.txt
    const keyValue = await parseKeyValue("./src/matches-set.txt");

    // Read content from beforeUpdate.txt
    const content = await fs.readFile("./src/beforeUpdate.txt", "utf-8");

    // Replace old reference numbers with new ones
    const updatedContent = content.replace(/\[(\d+)\]/g, (match, p1) => {
      const newValue = keyValue[parseInt(p1, 10)];
      return newValue ? `[${newValue}]` : match;
    });

    // Write the updated content to updated.txt
    await fs.writeFile("./src/updated.txt", updatedContent);
    console.log("Оновлений текст записано у файл updated.txt");
  } catch (error) {
    console.error("Помилка при роботі з файлами:", error);
  }
}

updateReferences();
