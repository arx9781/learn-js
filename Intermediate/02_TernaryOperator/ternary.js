/*a ternary operator is like a shortcut of if...else statement. instead of using
parentheses and braces with long code lines, you use '?' for if and ':' for else*/

let age = 19;
let message = age >= 18 ? "you can vote" : "you can not vote";
//providing the value to message variable depending on the condition
console.log(message);

//same code in if..else statement
if (age >= 18) {
  message = "you can vote";
} else {
  message = "you can not vote";
}
console.log(message);
