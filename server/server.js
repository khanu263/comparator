// server.js
// by Umair Khan

// Simple Express server for production.

// Set up express
const path = require("path");
const express = require("express");
const favicon = require("express-favicon");
const app = express();
const port = process.env.PORT || 3000;

// Set up build path
const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

// Set up favicon
app.use(favicon(path.join(__dirname, "..", "build", "favicon.ico")));

// Set up server
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Set up listener
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
