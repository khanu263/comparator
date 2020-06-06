// RankerPane.js
// by Umair Khan

// Component defining an item pane for ranking.

// Imports
import React from "react";
import { Box, Heading, Image, Paragraph } from "grommet";

// Define RankerPane component
class RankerPane extends React.Component {
  render() {
    let { item, align } = this.props;
    if (item.type === "film") {
      return (
        <Box direction="column" width="medium" justify="start" align={align}>
          {item.poster !== "(no poster found)" && <Image className="poster" src={item.poster} margin={{ bottom: "2em" }} />}
          <Heading margin="0" level="2" textAlign={align}>
            {item.name}
          </Heading>
          <Box direction="column" gap="small" align={align} margin={{ top: "1em" }}>
            <Paragraph margin="none" textAlign={align}>
              <b>Directed by:</b> {item.director}
            </Paragraph>
            <Paragraph margin="none" textAlign={align}>
              <b>Released:</b> {item.released}
            </Paragraph>
            <Paragraph margin="none" textAlign={align}>
              <b>Runtime:</b> {item.runtime}
            </Paragraph>
            <Paragraph margin="none" textAlign={align}>
              <b>Synopsis:</b> {item.overview}
            </Paragraph>
          </Box>
        </Box>
      );
    } else if (item.type === "tv show") {
      return (
        <Box direction="column" width="medium" justify="start" align={align}>
          {item.poster !== "(no poster found)" && <Image className="poster" src={item.poster} margin={{ bottom: "2em" }} />}
          <Heading margin="0" level="2">
            {item.name}
          </Heading>
          <Box direction="column" gap="small" align={align} margin={{ top: "1em" }}>
            <Paragraph margin="none" textAlign={align}>
              <b>Created by:</b> {item.created_by}
            </Paragraph>
            <Paragraph margin="none" textAlign={align}>
              <b>First aired:</b> {item.first_aired}
            </Paragraph>
            <Paragraph margin="none" textAlign={align}>
              <b>Seasons:</b> {item.seasons} ({item.episodes} episodes)
            </Paragraph>
            <Paragraph margin="none" textAlign={align}>
              <b>Synopsis:</b> {item.overview}
            </Paragraph>
          </Box>
        </Box>
      );
    } else if (item.type === "other") {
      return (
        <Box direction="column" width="medium" justify="start">
          <Heading margin="0" level="2" textAlign="center">
            {item.name}
          </Heading>
        </Box>
      );
    }
  }
}

// Export component
export default RankerPane;
