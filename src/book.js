function createTitle(title) {
  this.modifiedTitle = `Modified ${title}`
  return this.modifiedTitle
}
// why doesn't this pass?!
// var title1 = createTitle("Between the World and Me")
// console.log(title1)

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  this.name = characterName
  this.age = characterAge
  this.pronouns = characterPronouns
}
var character = new buildMainCharacter("Prince Jones Jr.", 25, "he/him")
// character.pronouns
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_a_constructor_function
// looks good to me so why doesn't it pass? (new)

// below works
// var reviews = new Set(['good', 'bad'])
// function saveReview(review) {
//   if (reviews.has(review)) {
//     console.log('has review')
//   } else {
//     console.log('doesnt have that one')
//   }
// }
var reviews = new Set(['good', 'bad'])
function saveReview(review) {
  if (reviews.has(review)) {
    return
  } else {
    reviews.push(review)
  }
}
// saveReview('')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set


// why
var pages = 100
function calculatePageCount(title) {
  pages = pages + (title.length * 20)
}


// how can I get this data to work with the functions above? pages for example
function writeBook(title, characterName, pages, genre) {
  this.title = title
  this.mainCharacter = characterName
  this.pageCount = pages
  this.genre = genre
}
// var book1 = new writeBook('Don Quixote', 'Alonso Quijano', 863, 'Novel')
// book1.title


function editBook(pages) {
  pageCount = pages * 0.75
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
