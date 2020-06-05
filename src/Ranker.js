// Ranker.js
// by Umair Khan

// Ranker page for Comparator, where user makes decisions.

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import { FormDown, FormNext, FormPrevious, FormUp } from "grommet-icons";
import RankerPane from "./RankerPane";
import data from "./data";

// Define Ranker component
class Ranker extends React.Component {
  constructor(props) {
    super(props);

    // The state for this component contains the window width
    this.state = {
      width: window.innerWidth,
    };

    // Bind functions
    this.updateWidth = this.updateWidth.bind(this);
    this.resetAndReturn = this.resetAndReturn.bind(this);
  }

  // Update state of width
  updateWidth() {
    this.setState((state) => ({
      width: window.innerWidth,
    }));
  }

  // Reset everything and go back to data entry
  resetAndReturn() {
    data.UserInput = [...data.EmptyForm];
    data.Items = [];
    this.props.returnToStart();
  }

  // Add event listener when component mounts
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // Remove event listener when component unmounts
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  // Render the component
  render() {
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
        <Button secondary margin={{ bottom: "3em" }} color="brand" label="Return to start" onClick={this.resetAndReturn} />
        <Box direction="row-responsive" gap="large">
          <RankerPane item={data.Items[4]} align="end" />
          {this.state.width > 768 ? (
            <Box direction="column" gap="small" align="center">
              <Button primary color="brand" icon={<FormPrevious />} label="This one" fill="horizontal" />
              <Button primary color="brand" icon={<FormNext />} label="That one" reverse={true} fill="horizontal" />
              <Button secondary color="brand" label="Draw" fill="horizontal" />
            </Box>
          ) : (
            <Box direction="column" gap="small" align="center">
              <Button primary color="brand" icon={<FormUp />} label="This one" fill="horizontal" />
              <Button secondary color="brand" label="Draw" fill="horizontal" />
              <Button primary color="brand" icon={<FormDown />} label="That one" reverse={true} fill="horizontal" />
            </Box>
          )}
          <RankerPane item={data.Items[4]} align="start" />
        </Box>
      </Box>
    );
  }
}

// Export component
export default Ranker;
