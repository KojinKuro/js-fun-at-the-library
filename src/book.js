function createTitle(bookName) {
  if(bookName.split(' ')[0].toLowerCase() !== 'the') {
    return `The ${bookName}`;
  } return bookName;
}

function buildMainCharacter(name, age, pronouns) {
  return { name, age, pronouns }
}

function saveReview(review, database) {
  if(!database.find(e => e === review)) database.push(review);
}

function calculatePageCount(bookName) {
  const PAGE_MULTIPLIER = 20;
  return bookName.length * PAGE_MULTIPLIER;
}

function writeBook(title, mainCharacter, genre) {
  return { title, mainCharacter, pageCount: calculatePageCount(title), genre };
}

function editBook(book) {
  book.pageCount = Math.floor(book.pageCount * 0.75);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}