// Validate.js
// by Umair Khan

// Validate and confirm user entries (e.g. multiple matches).

// Imports
import React from "react";
import { Box, Button, Heading } from "grommet";
import data from "./data";

// Define Ranker component
class Validate extends React.Component {
  render() {
    return (
      <Box direction="column" align="center" pad="large">
        <Heading level="1">Validate.</Heading>
        <Button primary color="brand" label="Next" onClick={this.props.nextPage} />
      </Box>
    );
  }
}

// Export component
export default Validate;
