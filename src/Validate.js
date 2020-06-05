// Validate.js
// by Umair Khan

// Validate and confirm user entries (e.g. multiple matches).

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import ValidateItem from "./ValidateItem";
import data from "./data";

// Define Ranker component
class Validate extends React.Component {
  constructor(props) {
    super(props);

    // Set the global data array to have the same size as the user entry array
    data.Items = new Array(data.UserInput.length).fill({});

    // The state for this component is the list of ValidateItem components
    this.state = {
      items: new Array(data.UserInput.length),
    };
  }

  // Update the name ID of an item in the data array based on selection
  updateID(i, event) {
    data.Items[i].name = event.value.name;
    data.Items[i].tmdb_id = event.value.tmdb_id;
    console.log(data.Items);
  }

  // Validate a user entry
  validateEntry(i, entry) {
    // If the type is "other", immediately update the data array and set element
    if (entry.type === "other") {
      data.Items[i] = { name: entry.name, type: "other" };
      let current_items = [...this.state.items];
      current_items[i] = <ValidateItem key={i} entry={entry} />;
      this.setState({
        items: current_items,
      });
    } else {
      // Otherwise, set up the API search call
      let search_url = "https://api.themoviedb.org/3/search";
      if (entry.type === "film") {
        search_url = `${search_url}/movie?`;
      } else if (entry.type === "tv show") {
        search_url = `${search_url}/tv?`;
      }

      // Add API key and query
      search_url = `${search_url}api_key=${process.env.REACT_APP_TMDB_KEY}&query=${encodeURI(entry.name.toLowerCase())}`;

      // Make the API call
      fetch(search_url)
        .then((result) => result.json())
        .then((result) => {
          // If no results are found, set the data type to other and set message
          if (result.total_results === 0) {
            data.Items[i] = { name: entry.name, type: "other" };
            let current_items = [...this.state.items];
            current_items[i] = <ValidateItem key={i} entry={entry} options={[]} />;
            this.setState({
              items: current_items,
            });
          } else if (result.total_results === 1) {
            // If exactly one result is found, use that as the item
            if (result.total_results === 1) {
              let name;
              if (entry.type === "film") {
                name = result.results[0].title;
              } else if (entry.type === "tv show") {
                name = result.results[0].name;
              }
              data.Items[i] = { name: name, type: entry.type, tmdb_id: result.results[0].id.toString() };
              let current_items = [...this.state.items];
              current_items[i] = <ValidateItem key={i} entry={entry} options={[""]} />;
              this.setState({
                items: current_items,
              });
            }
          } else {
            // If multiple matches are found, push data with empty name and id
            data.Items[i] = { name: "", type: entry.type, tmdb_id: "" };

            // Pick the top five (or less) matches
            let subset_results = [];
            if (result.results.length < 5) {
              subset_results = result.results;
            } else {
              subset_results = result.results.slice(0, 5);
            }

            // Generate a user option for each match
            let options = [];
            subset_results.forEach((match) => {
              // Get the name and release year (different for movie/tv show)
              let name;
              let release_year;
              if (entry.type === "film") {
                name = match.title;
                if (match.release_date && match.release_date !== "") {
                  release_year = match.release_date.split("-")[0];
                } else {
                  release_year = "?";
                }
              } else if (entry.type === "tv show") {
                name = match.name;
                if (match.first_air_date && match.first_air_date !== "") {
                  release_year = match.first_air_date.split("-")[0];
                } else {
                  release_year = "?";
                }
              }

              // Make the option string by combining with overview, limited to ~50 characters
              let option_str = `${name} (${release_year})`;
              if (option_str.length < 42) {
                if (match.overview && match.overview !== "") {
                  option_str = `${option_str} -- ${match.overview.slice(0, 47 - option_str.length)}...`;
                } else {
                  option_str = `${option_str} -- (?)`;
                }
              }

              // Push to option list
              options.push({ label: option_str, name: name, tmdb_id: match.id.toString() });

              // Set the element with item selection
              let current_items = [...this.state.items];
              current_items[i] = (
                <ValidateItem key={i} entry={entry} options={options} updateID={this.updateID.bind(this, i)} />
              );
              this.setState({
                items: current_items,
              });
            });
          }
        });
    }
  }

  // Perform validation when the component mounts
  componentDidMount() {
    data.UserInput.forEach((entry, i) => this.validateEntry(i, entry));
  }

  // Render the component
  render() {
    return (
      <Box background="#fff" direction="column" align="center" pad="large">
        <Heading level="1" margin={{ top: "0.1em", bottom: "0.4em" }}>
          Final checks.
        </Heading>
        <Paragraph size="large" margin={{ top: "0", bottom: "1.6em" }} textAlign="center">
          Review your items below and resolve any issues.
        </Paragraph>
        <Box direction="column" width="large" justify="around">
          {this.state.items}
        </Box>
        <Box direction="row" align="center" gap="medium" margin={{ top: "2.5em", bottom: "0.8em" }}>
          <Button secondary color="brand" label="Previous" onClick={this.props.prevPage} />
          <Button primary color="brand" label="Next" />
        </Box>
      </Box>
    );
  }
}

// Export component
export default Validate;
