function shelfBook(book, shelf) {
  const MAX_SHELF_SIZE = 3;
  if (shelf.length < MAX_SHELF_SIZE) shelf.unshift(book);
}

function unshelfBook(bookName, shelf) {
  var bookIndex = shelf.findIndex((b) => b.title === bookName);
  shelf.splice(bookIndex,1);
}

function listTitles(shelf) {
  const shelfNames = shelf.map((b) => b.title);
  return shelfNames.join(', ');
}

function searchShelf(shelf, bookName) {
  return shelf.find((b) => b.title === bookName) ? true : false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};