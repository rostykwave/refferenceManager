const fs = require("fs").promises;

async function parseKeyValue(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  const lines = data.split("\n");
  const keyValue = {};

  lines.forEach((line) => {
    const [key, value] = line.split("-").map((num) => parseInt(num, 10));
    if (!isNaN(key) && !isNaN(value)) {
      keyValue[key] = value;
    }
  });

  return keyValue;
}

module.exports = { parseKeyValue };
