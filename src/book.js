function createTitle(title) {
  this.modifiedTitle = `Modified ${title}`;
  return this.modifiedTitle
}
// why doesn't this pass?!
// var title1 = createTitle("Prince Jones Jr.")
// console.log(title1)

function buildMainCharacter(name, birthPlace, age) {
  this.characterName = name;
  this.characterBirthPlace = birthPlace;
  this.characterAge = age;
}
var character = new buildMainCharacter("Prince Jones Jr.", "Washington D.C.", 25);
// character.characterAge
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_a_constructor_function
// looks good to me so why doesn't it pass? (new)

// below works
// var reviews = new Set(['good', 'bad']);
// function saveReview(review) {
//   if (reviews.has(review)) {
//     console.log('has review')
//   } else {
//     console.log('doesnt have that one')
//   }
// }
var reviews = new Set(['good', 'bad']);
function saveReview(review) {
  if (reviews.has(review)) {
    return
  } else {
    reviews.push(review)
  }
}
// saveReview('')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

var pages
function calculatePageCount(title) {
  pages = title.length * 20
}


function writeBook() {

}


function editBook() {

}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
