function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].unshift(book);
}

function checkoutBook(library, title, genre) {
  var bookIndex = library.shelves[`${genre}`].findIndex((b) => b.title === title);
  if(bookIndex < 0) return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`

  var book = library.shelves[`${genre}`][bookIndex];
  library.shelves[`${genre}`].splice(bookIndex,1);

  return `You have now checked out ${book.title} from the ${library.name}.`;
}

function takeStock(library, genre) {
  var shelfCount = 0;
  if(arguments.length === 1) {
    for (let shelf in library.shelves) {
      shelfCount += library.shelves[shelf].length;
    } return `There are a total of ${shelfCount} books at the ${library.name}.`;
  }

  shelfCount = library.shelves[`${genre}`].length;
  return `There are a total of ${shelfCount} ${genre} books at the ${library.name}.`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};