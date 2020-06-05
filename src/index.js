// index.js
// by Umair Khan

// Render the app header and the app.

// Imports
import React from "react";
import ReactDOM from "react-dom";
import { Grommet } from "grommet";
import Theme from "./Theme";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import App from "./App";

// Render app
ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={Theme} full>
      <AppHeader />
      <App />
      <AppFooter />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
