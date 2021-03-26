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

var reviews = []
function saveReview() {

}
// https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
// https://www.codegrepper.com/code-examples/javascript/add+only+unique+values+to+array+javascript+using+spread+operator
// set looks real cool: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

function calculatePageCount() {

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
