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

    // Set up global points array and get matchups
    // data.points = new Array(data.items.length).fill(0);
    this.matchups = data.generateMatchups(data.items);
    this.numMatchups = this.matchups.length;

    // The state for this component contains the window width and the current matchup
    this.state = {
      width: window.innerWidth,
      matchup: 0,
    };

    // Bind functions
    this.updateMatchup = this.updateMatchup.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.resetAndReturn = this.resetAndReturn.bind(this);
  }

  // Update points and move to next matchup
  updateMatchup(result) {
    // Get the current matchup
    let matchup = this.state.matchup;

    // Give a point to the winner, or 0.5 to both if a draw (x10 to prevent rounding error)
    if (result < 2) data.items[this.matchups[matchup][result]].points += 10;
    else {
      data.items[this.matchups[matchup][0]].points += 5;
      data.items[this.matchups[matchup][1]].points += 5;
    }

    // If this was the last matchup, move to the next page, otherwise increment
    if (matchup === this.numMatchups - 1) this.props.nextPage();
    else {
      this.setState({
        matchup: matchup + 1,
      });
    }
  }

  // Update state of width
  updateWidth() {
    this.setState({
      width: window.innerWidth,
    });
  }

  // Reset everything and go back to data entry
  resetAndReturn() {
    data.input = JSON.parse(JSON.stringify(data.emptyForm));
    data.items = [];
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
        <Button secondary margin={{ bottom: "3em" }} color="brand" label="Start over" onClick={this.resetAndReturn} />
        <Box direction="row-responsive" gap="large">
          <RankerPane item={data.items[this.matchups[this.state.matchup][0]]} align="end" />
          {this.state.width > 768 ? (
            <Box direction="column" gap="small" align="center" width={{ min: "120px" }}>
              <Button
                primary
                color="brand"
                icon={<FormPrevious />}
                label="This one"
                fill="horizontal"
                onClick={() => this.updateMatchup(0)}
              />
              <Button
                primary
                color="brand"
                icon={<FormNext />}
                label="That one"
                reverse={true}
                fill="horizontal"
                onClick={() => this.updateMatchup(1)}
              />
              <Button secondary color="brand" label="Draw" fill="horizontal" onClick={() => this.updateMatchup(2)} />
            </Box>
          ) : (
            <Box direction="column" gap="small" align="center">
              <Button
                primary
                color="brand"
                icon={<FormUp />}
                label="This one"
                fill="horizontal"
                onClick={() => this.updateMatchup(1)}
              />
              <Button secondary color="brand" label="Draw" fill="horizontal" onClick={() => this.updateMatchup(2)} />
              <Button
                primary
                color="brand"
                icon={<FormDown />}
                label="That one"
                reverse={true}
                fill="horizontal"
                margin={{ bottom: "0.5em" }}
                onClick={() => this.updateMatchup(1)}
              />
            </Box>
          )}
          <RankerPane item={data.items[this.matchups[this.state.matchup][1]]} align="start" />
        </Box>
      </Box>
    );
  }
}

// Export component
export default Ranker;
