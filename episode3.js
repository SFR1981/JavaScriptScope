// prediction:
//  "the murderer is Mrs. Peacock"
// "the murderer is Professor Plum"

// Mrs Peacock is assigned within function
// so i suspect it wont be availible to
// secondVerdict method

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
