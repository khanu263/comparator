// EntryField.js
// by Umair Khan

// Component defining an entry row for the entry page.

// Imports
import React from "react";
import { Box, Button, Select, TextInput } from "grommet";
import { Close } from "grommet-icons";

// Options for type select
const options = ["film", "tv show", "other"];

// Define EntryField component
class EntryField extends React.Component {
  render() {
    return (
      <Box direction="row" gap="small" margin={{ bottom: "1em" }}>
        <TextInput placeholder="item name" value={this.props.name} onChange={this.props.updateName} />
        <Select placeholder="type" options={options} value={this.props.type} onChange={this.props.updateType} />
        {this.props.index > 2 && <Button secondary icon={<Close />} size="small" onClick={this.props.removeItem} />}
      </Box>
    );
  }
}

// Export component
export default EntryField;
