function shelfBook(book, shelf) {
  if (shelf.length >= 3) {
    return shelf
  } else {
    return shelf.unshift(book)
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    // if (shelf.includes(title)) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1)
      // console.log(shelf.indexOf(book))
      // var position = shelf.indexOf(book)
      // shelf.splice(position, 1)
    } else {
    }
  }
}

  // for (var i = 0; i = shelf.length; i++) {
  //   console.log(shelf[i]); }
  // console.log(shelf.includes('Hyperion'))
  // if (shelf.book[title] = title {
  //   return shelf
  // } else {
  //   return shelf.unshift(book)
  // }
// }

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
