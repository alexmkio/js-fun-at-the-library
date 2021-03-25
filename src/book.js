function createTitle(title) {
  return "modified " + title;
}
createTitle("Book Title 1")


function buildMainCharacter(name, birthPlace, age) {
  this.characterName = name;
  this.characterBirthPlace = birthPlace;
  this.characterAge = age;
}
var character = new BuildMainCharacter("Prince Jones Jr.", "Washington D.C.", 25);
// character
// https://codeburst.io/various-ways-to-create-javascript-object-9563c6887a47
// https://www.programiz.com/javascript/constructor-function

function saveReview() {

}


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
