// Header.js
// by Umair Khan

// Header for use in everything.

// Imports
import React from "react";
import { Header, Heading } from "grommet";
import { Compare } from "grommet-icons";

// Header definition
const AppHead = (props) => (
  <Header background="#000" justify="center" pad={{ left: "medium", right: "small" }} {...props}>
    <Compare color="#fff" size="large" />
    <Heading level="3" margin={{ top: "1.2em" }}>
      Comparator
    </Heading>
  </Header>
);

export default AppHead;
