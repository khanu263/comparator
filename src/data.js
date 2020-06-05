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
// var Items = [];

var Items = [
  {
    director: "Frederick King Keller",
    name: "The Pretender 2001",
    overview:
      "Picking up where the television series left off, 'The Pretender 2001' features even deeper explorations in the show's mythology, including a revealing look back at how Jarod originally espaced from the Centre. But now he must infiltrate the NSA to capture a ruthless assassin who might be a fellow Pretender from his past!",
    poster: "(no poster found)",
    release: "January 22, 2001",
    runtime: "91 min.",
    tmdb_id: "27338",
    type: "film",
  },
  {
    created_by: "(no creator(s) found)",
    episodes: "12",
    first_aired: "September 03, 2004",
    name: "Carrie and Barry",
    overview:
      "Carrie and Barry is a sitcom, shown 2004 - 2005 on BBC One, starring Neil Morrissey, Claire Rushbrook, Mark Williams and Michelle Gomez. Produced by Hartswood Films, it reunited Morrissey with personnel from Men Behaving Badly: specifically writer Simon Nye, executive producer Beryl Vertue and director Martin Dennis. It was produced by Sue Vertue. Neil Morrissey plays part-time taxi driver Barry and Claire Rushbrook is his beautician wife Carrie. The couple find themselves with the daily challenges of keeping the spice in their marriage and the fun in their day jobs — as well as having to deal with Barry's teenage daughter Sinéad from his disastrous first marriage. Mark Williams plays Barry's mate Kirk, who co-owns his black cab whilst Michelle Gomez is Carrie's acid-tongued best friend and fellow beautician Michelle.",
    poster: "(no poster found)",
    seasons: "2",
    tmdb_id: "9132",
    type: "tv show",
  },
  {
    director: "Shane Carruth",
    name: "Primer",
    overview:
      "Friends and fledgling entrepreneurs invent a device in their garage which reduces the apparent mass of any object placed inside it, but they discover that it has some highly unexpected capabilities - ones that could enable them to do and to have seemingly anything they want. Taking advantage of this unique opportunity is the first challenge they face. Dealing with the consequences is the next.",
    poster: "https://image.tmdb.org/t/p/w342/xEoq2WmDzpzxhkHEsmOYOg6BPg6.jpg",
    released: "October 08, 2004",
    runtime: "77 min.",
    tmdb_id: "14337",
    type: "film",
  },
  {
    created_by: "Mark Fergus, Hawk Ostby",
    episodes: "46",
    first_aired: "December 14, 2015",
    name: "The Expanse",
    overview:
      "A thriller set two hundred years in the future following the case of a missing young woman who brings a hardened detective and a rogue ship's captain together in a race across the solar system to expose the greatest conspiracy in human history.",
    poster: "https://image.tmdb.org/t/p/w342/wikmaI7OVqmq2O9HfknkzxX6Ygu.jpg",
    seasons: "4",
    tmdb_id: "63639",
    type: "tv show",
  },
  {
    name: "Pac-Man",
    type: "other",
  },
];

// Export everything
export default { EmptyForm, UserInput, Items };
