// data.js
// by Umair Khan

// Everything relating to the actual ranking algorithm.

// Array to hold raw user input.
// var UserInput = [
//   {
//     name: "",
//     type: "",
//   },
//   {
//     name: "",
//     type: "",
//   },
//   {
//     name: "",
//     type: "",
//   },
// ];

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
export default { UserInput, Items };
