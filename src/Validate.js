// Validate.js
// by Umair Khan

// Validate and confirm user entries (e.g. multiple matches).

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import data from "./data";

// Define Ranker component
class Validate extends React.Component {
  render() {
    return (
      <Box background="#fff" direction="column" align="center" pad="large">
        <Heading level="1" margin={{ top: "0.1em", bottom: "0.4em" }}>
          Final checks.
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "2em" }} textAlign="center">
          Review your items below and resolve any issues.
        </Paragraph>
        <Button primary color="brand" label="Next" onClick={this.props.nextPage} />
      </Box>
    );
  }
}

// Export component
export default Validate;
