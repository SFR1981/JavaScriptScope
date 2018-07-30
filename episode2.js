//Prediction : constant reassignment error

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock'; //error here
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}   //don't think will reach this point

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
