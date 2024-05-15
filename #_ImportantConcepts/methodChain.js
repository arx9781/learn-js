//method chaining is executing/calling method continuosly in one line of code

//trim whitespace, lowercasing everything except the first character

//WITHOUT METHOD CHAINING
let firstUsername = "  aNoNyMoUs ";
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();
console.log(firstUsername);
let extraLetters = username.slice(1);
extraLetters = extraLetters.toLowerCase();
username = firstLetter + extraLetters;

//WITH METHOD CHAINING
let altUsername = "  aNoNyMoUs ";
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(altUsername);
