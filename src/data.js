// data.js
// by Umair Khan

// Everything relating to the actual ranking algorithm.

// Array representing the initial empty form
var EmptyForm = [
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
// var UserInput = [...EmptyForm];

var UserInput = [
  {
    name: "2001",
    type: "film",
  },
  {
    name: "barry",
    type: "tv show",
  },
  {
    name: "Upstream Color",
    type: "film",
  },
  {
    name: "True Detective",
    type: "tv show",
  },
  {
    name: "asdf",
    type: "film",
  },
  {
    name: "asdf",
    type: "tv show",
  },
  {
    name: "Pac-Man",
    type: "other",
  },
];

// Array to hold processed user input, after validation and API calls.
var Items = [];

// Export everything
export default { EmptyForm, UserInput, Items };
