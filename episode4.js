// prediction :

// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'
//Suspect three is Mrs. Peacock

//because  outside of declareAllSuspect the updated suspectThree will not be availible to the final log command but the suspectThree form the top of th efile will


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
