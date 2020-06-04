// Header.js
// by Umair Khan

// Header for use at all times.

// Imports
import React from "react";
import { Header, Heading } from "grommet";
import { Compare } from "grommet-icons";

// Header definition
const AppHeader = () => (
  <Header background="brand" justify="center">
    <Compare color="#fff" size="large" />
    <Heading level="3" margin={{ top: "1.2em" }}>
      Comparator
    </Heading>
  </Header>
);

export default AppHeader;
