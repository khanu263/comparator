// Results.js
// by Umair Khan

// Results page for Comparator, which displays ranking.

// Imports
import React from "react";
import { Anchor, Box, Button, Heading, Paragraph, DataTable } from "grommet";
import { Share, Youtube } from "grommet-icons";
import data from "./data";

// Define Results component
class Results extends React.Component {
  constructor(props) {
    super(props);

    // Sort the items array based on points and create data to display
    data.items.sort((a, b) => (a.points < b.points ? 1 : a.points === b.points ? 0 : -1));
    this.tableData = data.items.map((item, i) => {
      return { rank: i + 1, points: item.points / 10, name: item.name, score: item.score };
    });

    // The state for this component is a table of recommendations
    this.state = {
      recs: [],
    };

    // Bind functions
    this.clearAndReset = this.clearAndReset.bind(this);
  }

  // Clear all data and reset to start
  clearAndReset() {
    data.input = JSON.parse(JSON.stringify(data.emptyForm));
    data.items = [];
    this.props.nextPage();
  }

  // When the component mounts, perform the API call
  componentDidMount() {
    // Create URL and make call
    let url = `${process.env.REACT_APP_CORS_ANYWHERE}https://tastedive.com/api/similar?q=${this.tableData[0].name}&limit=5&verbose=1&k=${process.env.REACT_APP_TASTEDIVE_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        // Get the similar items
        let similar = result.Similar.Results;

        // Create recommendation data
        let recs = similar.map((item) => {
          // Get the Wikipedia URL if it exists
          let wAnchor;
          if (item.wUrl) wAnchor = <Anchor href={item.wUrl} icon={<Share size="small" />} />;
          else wAnchor = "-";

          // Get the YouTube URL if it exists
          let yAnchor;
          if (item.yUrl) yAnchor = <Anchor href={item.yUrl} icon={<Youtube />} />;
          else yAnchor = "-";

          // Create the object
          return { name: item.Name, type: item.Type, wAnchor: wAnchor, yAnchor: yAnchor };
        });

        // Set the recommendation state
        this.setState({ recs: recs });
      });
  }

  // Render the component
  render() {
    return (
      <Box background="#fff" direction="column" align="center" pad="large">
        <Heading level="1" margin={{ top: "0.1em", bottom: "0.4em" }}>
          Results!
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "0.5em" }} textAlign="center">
          Based on your decisions, here's your ranking.
        </Paragraph>
        <Paragraph size="small" margin={{ top: "0", bottom: "2em" }} textAlign="center" fill>
          Each matchup winner received a point. In a draw, both items received half a point.
        </Paragraph>
        <DataTable
          columns={[
            { property: "rank", header: "Rank" },
            { property: "points", header: "Points" },
            { property: "name", header: "Name" },
            { property: "score", header: "TMDb score" },
          ]}
          data={this.tableData}
        />
        <Paragraph size="large" textAlign="center" margin={{ top: "2em", bottom: "1em" }}>
          Based on your top result, you may also enjoy these.
        </Paragraph>
        {this.state.recs.length > 0 ? (
          <DataTable
            columns={[
              { property: "name", header: "Name" },
              { property: "type", header: "Type" },
              { property: "wAnchor", header: "Wikipedia", align: "center" },
              { property: "yAnchor", header: "Youtube", align: "center" },
            ]}
            data={this.state.recs}
          />
        ) : (
          <Paragraph size="medium" textAlign="center">
            (no recommendations found for your top result)
          </Paragraph>
        )}
        <Button primary color="brand" label="Start over" margin={{ top: "2em" }} onClick={this.clearAndReset} />
      </Box>
    );
  }
}

// Export component
export default Results;
