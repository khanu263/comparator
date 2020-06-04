// Results.js
// by Umair Khan

// Results page for Comparator, which displays ranking.

// Imports
import React from "react";
import { Box, Button, Heading } from "grommet";

// Define Results component
class Results extends React.Component {
  render() {
    return (
      <Box direction="column" align="center" pad="large">
        <Heading level="1">Results.</Heading>
        <Button primary color="brand" label="Next" onClick={this.props.changePage} />
      </Box>
    );
  }
}

// Export component
export default Results;
