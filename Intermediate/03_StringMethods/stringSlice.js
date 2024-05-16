//string slicing = create a substring from a portion of another string
//"string".slice(firstIndex, lastIndex) i.e from-to

const username = "arx9781";
let split = username.slice(1, 5);
console.log(split); //rx97

let firstChar = username.slice(0, 1); //returns first character
console.log(firstChar); //a

//using negative starts at the end of the string
let lastChar = username.slice(-1);
console.log(lastChar); //1

const fullName = "anonymous man";
//calculating the second index dynamically by using the whitespace as a condition
let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName); //anonymous

/* calculating the starting index from whitespace, 
and since we want all chars, no need to specify last index */
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName); //man
