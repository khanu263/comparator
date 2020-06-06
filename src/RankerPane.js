// RankerPane.js
// by Umair Khan

// Component defining an item pane for ranking.

// Imports
import React from "react";
import { Box, Heading, Image, Paragraph } from "grommet";

// Define RankerPane component
class RankerPane extends React.Component {
  constructor(props) {
    super(props);

    // Make a local reference to the object passed in for easy access
    this.item = this.props.item;
  }

  // Render the component
  render() {
    if (this.item.type === "film") {
      return (
        <Box direction="column" width={{ max: "medium" }} justify="start" align={this.props.align}>
          {this.item.poster !== "(no poster found)" && (
            <Image className="poster" src={this.item.poster} margin={{ bottom: "2em" }} />
          )}
          <Heading margin="0" level="2" textAlign={this.props.align}>
            {this.item.name}
          </Heading>
          <Box direction="column" gap="small" align={this.props.align} margin={{ top: "1em" }}>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>Directed by:</b> {this.item.director}
            </Paragraph>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>Released:</b> {this.item.released}
            </Paragraph>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>Runtime:</b> {this.item.runtime}
            </Paragraph>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>Synopsis:</b> {this.item.overview}
            </Paragraph>
          </Box>
        </Box>
      );
    } else if (this.item.type === "tv show") {
      return (
        <Box direction="column" width={{ max: "medium" }} justify="start" align={this.props.align}>
          {this.item.poster !== "(no poster found)" && (
            <Image className="poster" src={this.item.poster} margin={{ bottom: "2em" }} />
          )}
          <Heading margin="0" level="2">
            {this.item.name}
          </Heading>
          <Box direction="column" gap="small" align={this.props.align} margin={{ top: "1em" }}>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>Created by:</b> {this.item.created_by}
            </Paragraph>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>First aired:</b> {this.item.first_aired}
            </Paragraph>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>Seasons:</b> {this.item.seasons} ({this.item.episodes} episodes)
            </Paragraph>
            <Paragraph margin="none" textAlign={this.props.align}>
              <b>Synopsis:</b> {this.item.overview}
            </Paragraph>
          </Box>
        </Box>
      );
    } else if (this.item.type === "other") {
      return (
        <Box direction="column" width={{ max: "medium" }} justify="start">
          <Heading margin="0" level="2" textAlign="center">
            {this.item.name}
          </Heading>
        </Box>
      );
    }
  }
}

// Export component
export default RankerPane;
