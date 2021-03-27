// function shelfBook(book, shelf) {
//   if (shelf.length < 3) {
//     return shelf.unshift(book)
//   } else {
//     return shelf
//   }
// }

function shelfBook(book, shelf) {
  if (shelf.length >= 3) {
    return shelf
  } else {
    return shelf.unshift(book)
  }
}

// why doesn't the below work?
// function shelfBook(book, shelf) {
//   if (shelf.length > 3) {
//     return shelf
//   } else {
//     return shelf.unshift(book)
//   }
// }

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
