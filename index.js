const fs = require("fs").promises;

const keyValue = {
  27: 2,
  28: 34,
};

async function updateReferences() {
  try {
    // Read content from beforeUpdate.txt
    const content = await fs.readFile("beforeUpdate.txt", "utf-8");

    // Replace old reference numbers with new ones
    const updatedContent = content.replace(/\[(\d+)\]/g, (match, p1) => {
      const newValue = keyValue[parseInt(p1, 10)];
      return newValue ? `[${newValue}]` : match;
    });

    // Ensure the updated content is only written once
    await fs.writeFile("updated.txt", updatedContent);
    console.log("Оновлений текст записано у файл updated.txt");
  } catch (error) {
    console.error("Помилка при роботі з файлами:", error);
  }
}

updateReferences();
