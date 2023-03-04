const day = 3;
let weekend = "";

switch (day) {
  case 1:
    weekend = "Monday";
    break;
  case 2:
    weekend = "Tuesday";
    break;
  case 3:
    weekend = "Wendsday";
    break;
  case 4:
    weekend = "Thursday";
    break;
  case 5:
    weekend = "Friday";
    break;
  case 6:
    weekend = "Saturday";
    break;
  case 7:
    weekend = "Sunday";
    break;
  default:
    weekend = "NOT Weekend"; 
}

console.log(weekend);

