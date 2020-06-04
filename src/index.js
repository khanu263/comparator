// index.js
// by Umair Khan

// Main coordination file for app.

// Imports
import React from "react";
import ReactDOM from "react-dom";
import Entry from "./Entry";

// Render entry page
ReactDOM.render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>,
  document.getElementById("root")
);
