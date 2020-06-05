// Ranker.js
// by Umair Khan

// Ranker page for Comparator, where user makes decisions.

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import data from "./data";

// Define Ranker component
class Ranker extends React.Component {
  render() {
    console.log(data.Items);
    return (
      <Box background="#fff" direction="column" align="center" pad="large">
        <Heading level="1" margin={{ top: "0.1em", bottom: "0.4em" }}>
          Decision time.
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "0" }} textAlign="center">
          Pick your favorite between the two.
        </Paragraph>
        <Paragraph size="large" margin={{ top: "0.3em", bottom: "2em" }} textAlign="center">
          (If you really have to, call it a draw.)
        </Paragraph>
        <Button primary color="brand" label="Next" onClick={this.props.nextPage} />
      </Box>
    );
  }
}

// Export component
export default Ranker;
