// index.js
// by Umair Khan

// Render the app header and the app.

// Imports
import React from "react";
import ReactDOM from "react-dom";
import { Grommet } from "grommet";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import App from "./App";
import theme from "./theme";

// Render app
ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme} full>
      <AppHeader />
      <App />
      <AppFooter />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
