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
  const SHELF = library.shelves[genre];
  const BOOK_INDEX = SHELF.findIndex((b) => b.title === title);
  const BOOK = SHELF[BOOK_INDEX];
  
  if (!BOOK) return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  
  SHELF.splice(BOOK_INDEX,1);
  return `You have now checked out ${BOOK.title} from the ${library.name}.`;
}

function takeStock(library, genre) {
  var shelfCount = 0;
  if(!arguments[1]) {
    Object.values(library.shelves).forEach(shelf => shelfCount += shelf.length);
    return `There are a total of ${shelfCount} books at the ${library.name}.`;
  }

  shelfCount = library.shelves[genre].length;
  if(!shelfCount) return `Sorry, there are currently no ${genre} books available at the ${library.name}.`;
  return `There are a total of ${shelfCount} ${genre} books at the ${library.name}.`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};