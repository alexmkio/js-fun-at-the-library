function shelfBook(book, shelf) {
  if (shelf.length >= 3) {
    return shelf
  } else {
    return shelf.unshift(book)
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var shelfTitles = []
  for (var i = 0; i < shelf.length; i++) {
    shelfTitles.push(shelf[i].title)
  }
    return shelfTitles.join(', ')
}

function searchShelf(shelf, title) {
  var isOnShelf = false
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      isOnShelf = true
    } else {
      isOnShelf = false
    }
  }
  return isOnShelf
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
