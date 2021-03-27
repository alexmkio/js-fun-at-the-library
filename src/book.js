function createTitle(title) {
  if (title.includes('The')) {
    return title
  } else {
    this.modifiedTitle = `The ${title}`
    return this.modifiedTitle
  }
  // if first four characters does not equal "The "
  // append "The "-
  // else
  // don't modify
  // this.modifiedTitle = `The ${title}`
  // return this.modifiedTitle
}
// why doesn't this pass?!
// var title1 = createTitle("Between the World and Me")
// console.log(title1)

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  var character = {
  name: characterName,
  age: characterAge,
  pronouns: characterPronouns,
  }
  return character
}

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

function saveReview(review, reviews) {
  // if (reviews.has(review)) {
  //   return
  // } else {
    reviews.push(review)
  // }
    return reviews.length
}
// saveReview('')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set


// why

function calculatePageCount(title) {
  var pages = (title.length * 20)
  return pages
}


// how can I get this data to work with the functions above? pages for example
function writeBook(title, characterName, genre) {
  var book = {
  title: title,
  mainCharacter: characterName,
  pageCount: calculatePageCount(title),
  genre: genre,
  }
  return book
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
  writeBook,
  editBook
}
