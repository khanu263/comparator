// Entry.js
// by Umair Khan

// Entry page for Comparator, where user types things to rank.

// Imports
import React from "react";
import { Box, Heading, Grommet, Text } from "grommet";
import Theme from "./Theme";
import AppHead from "./AppHead";

const Entry = () => {
  return (
    <Grommet theme={Theme} full>
      <Box fill>
        <AppHead></AppHead>
        <Box direction="column" align="center" pad="large">
          <Heading level="1">Rank anything.</Heading>
          <Text size="large">Enter your items below to get started.</Text>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Entry;
