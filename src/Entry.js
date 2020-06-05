// Entry.js
// by Umair Khan

// Entry page for Comparator, where user enters things to rank.

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import EntryField from "./EntryField";
import data from "./data";

// Define Entry component
class Entry extends React.Component {
  constructor(props) {
    super(props);

    // The state for this component contains all fields, initialized to three
    this.state = {
      values: [
        {
          name: "",
          type: "",
        },
        {
          name: "",
          type: "",
        },
        {
          name: "",
          type: "",
        },
      ],
    };

    // Bind functions
    this.createFields = this.createFields.bind(this);
    this.addItem = this.addItem.bind(this);
    this.checkAndContinue = this.checkAndContinue.bind(this);
  }

  // Create the fields based on the current state
  createFields() {
    return this.state.values.map((field, i) => {
      if (i > 2) {
        return (
          <EntryField
            key={i}
            index={i}
            name={field.name}
            type={field.type}
            updateName={this.updateName.bind(this, i)}
            updateType={this.updateType.bind(this, i)}
            removeItem={this.removeItem.bind(this, i)}
          />
        );
      } else {
        return (
          <EntryField
            key={i}
            index={i}
            name={field.name}
            type={field.type}
            updateName={this.updateName.bind(this, i)}
            updateType={this.updateType.bind(this, i)}
          />
        );
      }
    });
  }

  // Update an item name
  updateName(i, event) {
    let values = [...this.state.values];
    values[i].name = event.target.value;
    this.setState({ values });
  }

  // Update an item type
  updateType(i, event) {
    let values = [...this.state.values];
    values[i].type = event.option;
    this.setState({ values });
  }

  // Remove an item
  removeItem(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  // Add an item
  addItem() {
    this.setState((state) => ({
      values: [
        ...state.values,
        {
          name: "",
          type: "",
        },
      ],
    }));
  }

  // Make sure all items are filled and continue to validation
  checkAndContinue() {
    // Go through fields and check for empty
    let goodToGo = true;
    this.state.values.forEach((element) => {
      if (goodToGo && (element.name === "" || element.type === "")) {
        goodToGo = false;
      }
    });

    // Alert user or move to next page
    if (goodToGo) {
      data.UserInput = this.state.values;
      this.props.nextPage();
    } else {
      alert("Please fill out all fields before proceeding.");
    }
  }

  // Render page
  render() {
    const fields = this.createFields();
    return (
      <Box background="#fff" direction="column" align="center" pad="large">
        <Heading level="1" margin={{ top: "0.1em", bottom: "0.4em" }}>
          Rank anything.
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "2em" }} textAlign="center">
          Add your items below to get started.
        </Paragraph>
        <Box direction="column" width="large" justify="start">
          {fields}
        </Box>
        <Box direction="row" align="center" gap="medium" margin={{ top: "1.5em", bottom: "0.8em" }}>
          <Button primary color="brand" label="Add Item" onClick={this.addItem} />
          <Button primary color="brand" label="Next" onClick={this.checkAndContinue} />
        </Box>
      </Box>
    );
  }
}

// Export component
export default Entry;
