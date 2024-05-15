let age = 20;
if (age >= 18) {
  console.log("you are old enough to enter the site");
} else {
  console.log("you must be 18+ to enter to enter the site");
}

let isStudent = true;
//if the value is a boolean, can place the variable without condition
if (isStudent) {
  console.log("you can visit the lab");
} else {
  console.log("you are not permitted!");
}

let drivingAge = 16;
let license = true;
//nesting loops to check more conditions
if (drivingAge >= 18) {
  if (license == true) {
    console.log("you can now drive");
  } else {
    console.log("you must get a license before driving");
  }
} else {
  console.log("you must be 18+ and have a valid license to drive");
}

let studentGrade = 45;
//else if statements for chaining and multiple checking
if (studentGrade < 0) {
  console.log("the number is not valid");
} else if (studentGrade > 0 && studentGrade < 35) {
  console.log("you have failed");
} else if (studentGrade > 35 && studentGrade < 50) {
  console.log("you got C grade");
} else if (studentGrade > 50 && studentGrade < 75) {
  console.log("you got B grade");
} else {
  console.log("you got A grade");
}
