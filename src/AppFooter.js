// AppFooter.js
// by Umair Khan

// AppFooter for use at all times.

// Imports
import React from "react";
import { Anchor, Footer, Paragraph } from "grommet";
import { Grommet, Heroku, Reactjs } from "grommet-icons";

// Footer definition
const AppFooter = () => (
  <Footer direction="column" gap="none" justify="center">
    <Paragraph color="#fff" size="medium" margin={{ top: "2em", bottom: "0" }} textAlign="center">
      Copyright &copy; 2020 by <Anchor href="https://ukhan.dev" label="Umair Khan" color="#fff" />.
    </Paragraph>
    <Paragraph color="#fff" size="medium" margin={{ bottom: "0" }} textAlign="center">
      Built with <Anchor href="https://reactjs.org" label="React" color="#fff" /> <Reactjs size="0.8em" color="#fff" /> and{" "}
      <Anchor href="https://v2.grommet.io" label="Grommet" color="#fff" /> <Grommet size="0.8em" color="#fff" />.
    </Paragraph>
    <Paragraph color="#fff" size="medium" textAlign="center">
      Deployed with <Anchor color="#fff" href="https://heroku.com" label="Heroku" /> <Heroku color="#fff" size="0.8em" /> .
    </Paragraph>
    <Paragraph color="#fff" size="medium" margin={{ top: "0" }} textAlign="center">
      Film and television data from <Anchor color="#fff" href="https://themoviedb.org" label="TMDb" />.
    </Paragraph>
    <Paragraph color="#fff" size="medium" margin={{ top: "0", bottom: "2em" }} textAlign="center">
      Recommendations powered by <Anchor color="#fff" href="https://tastedive.com" label="TasteDive" />.
    </Paragraph>
  </Footer>
);

// Export footer
export default AppFooter;
