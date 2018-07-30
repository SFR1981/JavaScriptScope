
// episode 10

let murderer = 'Professor Plum';

if (murderer !== 'Mr Green') {
   murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is probably ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
