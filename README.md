**Note**: on GitHub, some of the commits look like they came on June 6. However, I believe this is a time zone issue. If you actually look at the timestamp for the commit (e.g. hover over the `[time] ago`) you'll see that everything was finished on June 5, with the exception of this commit.

Also, I've noticed that sometimes the fonts on the deployed site do not load due to the following error.

```
Refused to apply style from 'https://fonts.googleapis.com/css?family=Avenir|Karla' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
```

This appears to be beyond my control -- most of the time everything works, then suddenly the fonts will stop loading for a few hours, then start working again. Interestingly, the fonts load fine on my phone even when this error shows up. I'm leaving it as-is.

# comparator

**This project is live at [comparator.ukhan.dev](https://comparator.ukhan.dev).** Deployed with [Heroku](https://heroku.com/).

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