// Ranker.js
// by Umair Khan

// Ranker page for Comparator, where user makes decisions.

// Imports
import React from "react";
import { Box, Button, Heading } from "grommet";

// Define Ranker component
class Ranker extends React.Component {
  render() {
    return (
      <Box direction="column" align="center" pad="large">
        <Heading level="1">Ranker.</Heading>
        <Button primary color="brand" label="Next" onClick={this.props.nextPage} />
      </Box>
    );
  }
}

// Export component
export default Ranker;
