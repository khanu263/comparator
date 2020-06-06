// data.js
// by Umair Khan

// Everything relating to the actual ranking process.

// Array representing the initial empty form
var emptyForm = [
  {
    name: "",
    type: "",
  },
  {
    name: "",
    type: "",
  },
  {
    name: "",
    type: "",
  },
];

// Array to hold user input from form
var input = JSON.parse(JSON.stringify(emptyForm));

// Array to hold processed user input, after validation and API calls.
var items;

// In-place Fisher-Yates shuffle on the given array
// (https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Function to generate randomly-shuffled matchups encompassing given items
function generateMatchups(items) {
  // Generate the matchups -- each one is shuffled
  let matchups = [];
  for (let i = 0; i < items.length - 1; i++) {
    for (let j = i + 1; j < items.length; j++) {
      let matchup;
      if (Math.random() < 0.5) matchup = [i, j];
      else matchup = [j, i];
      matchups.push(matchup);
    }
  }

  // Shuffle entire array and return
  shuffle(matchups);
  return matchups;
}

// Export everything
export default { emptyForm, input, items, generateMatchups };
