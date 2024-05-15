//a switch is used if there are many elif statemtents. redcues the code
let MARKS = 90;

switch (true) {
  case MARKS >= 90: //can also do logical basing
    console.log(`Congratulations you got A grade!`);
    break; //break statement to break out of the condition is its true

  case MARKS >= 80:
    console.log(`You can do Better! B grade`);
    break;

  case MARKS >= 70:
    console.log(`Try Harder! C grade`);
    break;

  case MARKS >= 60:
    console.log(`Stay for Afterclass. D grade`);
    break;

  case MARKS >= 50:
    console.log(`Need Immediate Suspenstion! F grade`);
    break;

  case MARKS >= 40:
    console.log(`Failed.`);
    break;

  default: //default statemtent if none of the conditions match
    console.log(`Invalid Marks Entered!`);
    break;
}
