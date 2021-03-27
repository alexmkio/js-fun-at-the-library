function createTitle(title) {
  if (title.includes('The')) {
    return title
  } else {
    this.modifiedTitle = `The ${title}`
    return this.modifiedTitle
  }
}

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  var character = {
  name: characterName,
  age: characterAge,
  pronouns: characterPronouns,
  }
  return character
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return
  } else {
    reviews.push(review)
  }
    return reviews.length
}

function calculatePageCount(title) {
  var pages = (title.length * 20)
  return pages
}

function writeBook(title, characterName, genre) {
  var book = {
  title: title,
  mainCharacter: characterName,
  pageCount: calculatePageCount(title),
  genre: genre,
  }
  return book
}

function editBook(book) {
  // console.log(book)
  book.pageCount = book.pageCount * 0.75
  return book.pageCount
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
}
