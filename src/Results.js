// Results.js
// by Umair Khan

// Results page for Comparator, which displays ranking.

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";

// Define Results component
class Results extends React.Component {
  render() {
    return (
      <Box background="#fff" direction="column" align="center" pad="large">
        <Heading level="1" margin={{ top: "0.1em", bottom: "0.4em" }}>
          Results!
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "2em" }} textAlign="center">
          Based on your decisions, here's your ranking.
        </Paragraph>
        <Button primary color="brand" label="Next" onClick={this.props.nextPage} />
      </Box>
    );
  }
}

// Export component
export default Results;
