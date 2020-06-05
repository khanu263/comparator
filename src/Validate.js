// Validate.js
// by Umair Khan

// Validate and confirm user entries (e.g. multiple matches).

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import data from "./data";

// Define Ranker component
class Validate extends React.Component {
  constructor(props) {
    super(props);

    // Immediately save a copy of user input
    this.userEntrySnapshot = [...data.UserInput];

    // Bind functions
    this.validateMovie = this.validateMovie.bind(this);
    this.validateTV = this.validateTV.bind(this);
    this.validateOther = this.validateOther.bind(this);
    this.resetAndReturn = this.resetAndReturn.bind(this);
  }
  // Validate a movie
  validateMovie(name) {}

  // Validate a TV show
  validateTV(name) {}

  // Validate a misc item
  validateOther(name) {}

  // Reset and go back previous page
  resetAndReturn() {
    data.UserInput = [...this.userEntrySnapshot];
    this.props.prevPage();
  }

  // Render the component
  render() {
    return (
      <Box background="#fff" direction="column" align="center" pad="large">
        <Heading level="1" margin={{ top: "0.1em", bottom: "0.4em" }}>
          Final checks.
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "2em" }} textAlign="center">
          Review your items below and resolve any issues.
        </Paragraph>
        <Box direction="row" align="center" gap="medium" margin={{ top: "1.5em", bottom: "0.8em" }}>
          <Button secondary color="brand" label="Previous" onClick={this.resetAndReturn} />
          <Button primary color="brand" label="Next" />
        </Box>
      </Box>
    );
  }
}

// Export component
export default Validate;
