// Validate.js
// by Umair Khan

// Validate and confirm user entries (e.g. multiple matches).

// Imports
import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import ValidateItem from "./ValidateItem";
import data from "./data";

// Function to format date given YYYY[-MM[-DD]]
function formatDate(date) {
  // Define the months
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Split the date and get the year
  let split = date.split("-");
  let year = split[0];

  // Get the month
  let month = "";
  if (split.length > 1) month = months[parseInt(split[1]) - 1];

  // Get the day
  let day = "";
  if (split.length > 2) day = split[2];

  // Return string
  if (month === "") return year;
  if (month !== "" && day === "") return `${month} ${year}`;
  if (month !== "" && day !== "") return `${month} ${day}, ${year}`;
}

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

    // Bind functions
    this.fillAndContinue = this.fillAndContinue.bind(this);
  }

  // Update the name ID of an item in the data array based on selection
  updateID(i, event) {
    data.Items[i].name = event.value.name;
    data.Items[i].tmdb_id = event.value.tmdb_id;
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
        .then((response) => response.json())
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

  // Use the validated IDs to get information about items before moving to ranking
  fillAndContinue() {
    // Check to make sure that all IDs have been filled
    let goodToGo = true;
    data.Items.forEach((item) => {
      if (item.type !== "other" && item.tmdb_id === "") goodToGo = false;
    });

    // Check the boolean
    if (!goodToGo) {
      alert("Please resolve all match issues before proceeding.");
    } else {
      // Go through data items
      data.Items.forEach((item) => {
        // If the type is "other", nothing to do
        if (item.type === "other") return;

        // Otherwise, build the API URL based on type
        let info_url;
        if (item.type === "film") {
          info_url = `https://api.themoviedb.org/3/movie/${item.tmdb_id}`;
        } else if (item.type === "tv show") {
          info_url = `https://api.themoviedb.org/3/tv/${item.tmdb_id}`;
        }

        // Add the API key
        info_url = `${info_url}?api_key=${process.env.REACT_APP_TMDB_KEY}`;
        if (item.type === "film") info_url = `${info_url}&append_to_response=credits`;

        // Call the API
        fetch(info_url)
          .then((response) => response.json())
          .then((result) => {
            // Add the poster path and the overview
            if (result.poster_path && result.poster_path !== "")
              item.poster = `https://image.tmdb.org/t/p/w342${result.poster_path}`;
            else item.poster = "(no poster found)";
            if (result.overview && result.overview !== "") item.overview = result.overview;
            else item.overview = "(no overview found)";

            // Films get director, release date, and runtime, whereas
            // shows get creator, first air date, and # of seasons/episodes
            if (item.type === "film") {
              // Get list of directors
              let directors = [];
              if (result.credits && result.credits.crew) {
                result.credits.crew.forEach((member) => {
                  if (member.job === "Director") directors.push(member.name);
                });
              }

              // Add director(s)
              if (directors.length > 0) item.director = directors.join(", ");
              else item.director = "(no director(s) found)";

              // Add release date
              if (result.release_date && result.release_date !== "") item.released = formatDate(result.release_date);
              else item.released = "(no date found)";

              // Add runtime
              if (result.runtime) item.runtime = `${result.runtime} min.`;
              else item.runtime = "(no runtime found)";
            } else if (item.type === "tv show") {
              // Get list of creators
              let creators = [];
              if (result.created_by) {
                result.created_by.forEach((member) => {
                  creators.push(member.name);
                });
              }

              // Add creator(s)
              if (creators.length > 0) item.created_by = creators.join(", ");
              else item.created_by = "(no creator(s) found)";

              // Add first air date
              if (result.first_air_date && result.first_air_date !== "")
                item.first_aired = formatDate(result.first_air_date);
              else item.first_aired = "(no date found)";

              // Add number of seasons
              if (result.number_of_seasons && result.number_of_seasons !== "")
                item.seasons = result.number_of_seasons.toString();
              else item.seasons = "(season data not found)";

              // Add number of episodes
              if (result.number_of_episodes && result.number_of_episodes !== "")
                item.episodes = result.number_of_episodes.toString();
              else item.episodes = "(episode data not found)";
            }
          })
          .then(() => {
            // Move to next page
            this.props.nextPage();
          });
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
        <Box direction="column" width="large">
          {this.state.items}
        </Box>
        <Box direction="row" align="center" gap="medium" margin={{ top: "2.5em", bottom: "0.8em" }}>
          <Button secondary color="brand" label="Previous" onClick={this.props.prevPage} />
          <Button primary color="brand" label="Next" onClick={this.fillAndContinue} />
        </Box>
      </Box>
    );
  }
}

// Export component
export default Validate;
