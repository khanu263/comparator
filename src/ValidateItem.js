// ValidateItem.js
// by Umair Khan

// Component defining an item on the validation page.

// Imports
import React from "react";
import { Box, Paragraph, Select } from "grommet";
import { Checkmark, CaretNext } from "grommet-icons";

// Define ValidateItem component
class ValidateItem extends React.Component {
  render() {
    // Determine the appropriate content:
    //  - category is other -> simple message
    //  - no options given -> no matches found
    //  - one option given -> unique match found
    //  - multiple options given -> have user decide
    if (this.props.entry.type === "other") {
      return (
        <Box direction="row" gap="small" margin={{ bottom: "0.5em" }} justify="center" align="center">
          <Paragraph>
            <b>{this.props.entry.name}</b> as <b>other</b>
          </Paragraph>
          <Checkmark size="1em" />
        </Box>
      );
    } else if (this.props.options.length === 0) {
      return (
        <Box direction="row" gap="small" margin={{ bottom: "0.5em" }} justify="center" align="center">
          <Paragraph>
            <b>{this.props.entry.name}</b> as <b>{this.props.entry.type}</b>
          </Paragraph>
          <CaretNext size="0.7em" />
          <Paragraph>
            No matches found, will use as <b>Other</b>.
          </Paragraph>
        </Box>
      );
    } else if (this.props.options.length === 1) {
      return (
        <Box direction="row" gap="small" margin={{ bottom: "0.5em" }} justify="center" align="center">
          <Paragraph>
            <b>{this.props.entry.name}</b> as <b>{this.props.entry.type}</b>
          </Paragraph>
          <CaretNext size="0.7em" />
          <Paragraph>Unique match found!</Paragraph>
          <Checkmark size="1em" />
        </Box>
      );
    } else if (this.props.options.length > 1) {
      return (
        <Box direction="row" gap="small" margin={{ top: "0.2em", bottom: "0.7em" }} justify="center" align="center">
          <Paragraph>
            <b>{this.props.entry.name}</b> as <b>{this.props.entry.type}</b>
          </Paragraph>
          <CaretNext size="0.7em" />
          <Paragraph>Multiple matches found.</Paragraph>
          <CaretNext size="0.7em" />
          <Select placeholder="select match" labelKey="label" options={this.props.options} onChange={this.props.updateID} />
        </Box>
      );
    }
  }
}

// Export component
export default ValidateItem;
