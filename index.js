const fs = require("fs").promises;
const { parseKeyValue } = require("./src/helpers/parseKeyValue");

async function updateReferences() {
  try {
    const defaultNumberValue = 1000;
    // Parse key-value pairs from matches.txt
    const keyValue = await parseKeyValue("./src/matches-set.txt");

    // Read content from text-to-edit.txt
    const content = await fs.readFile("./src/text-to-edit.txt", "utf-8");

    // Replace old reference numbers with new ones
    const updatedContent = content.replace(
      /\[(\d+(?:,\s*\d+)*)\]/g,
      (match, numbers) => {
        const updatedNumbers = numbers.split(",").map((num) => {
          const newValue = keyValue[parseInt(num.trim(), 10)];
          return newValue ? newValue : defaultNumberValue;
        });

        return `[${updatedNumbers.join(", ")}]`;
      }
    );

    // Write the updated content to text-to-edit.txt
    await fs.writeFile("./src/text-to-edit.txt", updatedContent);
    console.log("Оновлений текст записано у файл text-to-edit.txt");
  } catch (error) {
    console.error("Помилка при роботі з файлами:", error);
  }
}

updateReferences();
