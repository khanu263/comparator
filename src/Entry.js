// Entry.js
// by Umair Khan

// Entry page for Comparator, where user enters things to rank.

// Imports
import React from "react";
import { Box, Button, Heading, Text, Paragraph } from "grommet";

// Define Entry component
class Entry extends React.Component {
  render() {
    return (
      <Box direction="column" align="center" pad="large">
        <Heading level="1" margin={{ bottom: "0.4em" }}>
          Rank anything.
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "2em" }}>
          Enter your items below to get started.
        </Paragraph>
        <Button primary color="brand" label="Next" onClick={this.props.changePage} />
      </Box>
    );
  }
}

// Export component
export default Entry;
