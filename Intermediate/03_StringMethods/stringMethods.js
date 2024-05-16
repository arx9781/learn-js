//some string methods

let userName = " arx9781 ";
let startsText = userName.startsWith(" "); //returns boolean value (true in this case)
let includesText = userName.includes(" "); //checks if the string contains something mentioned, boolean

console.log(userName);
console.log(`CharAt(2): ` + userName.charAt(2)); //find the character at the given index
console.log(`To Lowercase: ` + userName.toLowerCase());
console.log(`To Uppercase: ` + userName.toUpperCase());
console.log(`First Index(9): ` + userName.indexOf("9")); //finds the first occurence of the char
console.log(`Last Index(r): ` + userName.lastIndexOf("r")); //finds the last occurence of the char
console.log(`Length: ` + userName.length); //finds the last occurence of the char
console.log(`Trim: ` + userName.trim()); //removes whitespace
console.log(`Repeat: ` + userName.repeat(3)); //repeats the string n times

startsText == " " ? `username cant start with empty character` : `registered`;
includesText == " " ? `username cant have empty characters` : `registered`;
