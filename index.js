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

const input =
  "Нові можливості оцінювання ризику розвитку госпітальних ускладнень у хворих з гострим інфарктом міокарда з елевацією сегмента ST за даними вивчення клітинного складу крові / О. М. Пархоменко, О. В. Шумаков, Т. В. Талаєва, І. В. Третяк, О. В. Довгань // Український кардіологічний журнал. 2021. Т. 28, № 1. С. 7-17.";
const output = translateReference(input);
//Пархоменко О.М., Шумаков О.В., Талаєва Т.В., Третяк І.В., Довгань О.В. Нові можливості оцінювання ризику розвитку госпітальних ускладнень у хворих з гострим інфарктом міокарда з елевацією сегмента ST за даними вивчення клітинного складу крові. Український кардіологічний журнал. 2021. Т. 28, № 1. С. 7-17.

console.log(output);
