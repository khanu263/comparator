# comparator

**This project is live at [comparator.ukhan.dev](comparator.ukhan.dev).** Deployed with [Heroku](https://heroku.com/).

A website that lets you rank a movies and television shows (and anything else, really) based on a series of binary contests. Powered by [TMDb](https://www.themoviedb.org/) and [TasteDive](https://tastedive.com/).

### Run locally

```
git clone https://github.com/khanu263/comparator.git
cd comparator
npm install
npm run start
```

### Project structure

- `public` -- Primary HTML/CSS and static files.
- `server` -- Simple Express server for serving up the app and favicon.
- `src` -- React components, one per file. The exceptions are `theme.js` (the Grommet theme), `data.js` (data-related objects and functions), and `index.js` (root rendering).

### Libraries / frameworks 

- [React](https://reactjs.org/) (bootstrapped with [Create React App](https://create-react-app.dev/))
- [Grommet](https://v2.grommet.io/) and [Grommet Icons](https://icons.grommet.io/)
- [Express](https://expressjs.com/)

### Acknowledgements

- mpen on StackOverflow for going through [how to edit an array inside state](https://stackoverflow.com/a/49502115)
- Nitin Patel for a very simple [JavaScript implementation of an in-place Fischer-Yates shuffle](https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb)
- sideshowbarker on StackOverflow for explaining the [CORS Anywhere workaround](https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors) for TasteDive