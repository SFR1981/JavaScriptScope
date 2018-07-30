// Prediction
// i think it'll be Mrs Green,
// because that murderer has the scope of the changeMurderer function and the other 'murderers' will be within their own nested functions.

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';  // global

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
