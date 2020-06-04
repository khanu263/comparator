// App.js
// by Umair Khan

// Main component that coordinates flow.

// Imports
import React from "react";
import Entry from "./Entry";
import Ranker from "./Ranker";
import Results from "./Results";

// Define the App component
class App extends React.Component {
  constructor(props) {
    super(props);

    // The state for this component is just a number for the page
    this.state = { page: 1 };

    // These functions are used by other components to change the page
    this.toEntry = this.toEntry.bind(this);
    this.toRanker = this.toRanker.bind(this);
    this.toResults = this.toResults.bind(this);
  }

  // Change the page to item entry
  toEntry() {
    this.setState({ page: 1 });
  }

  // Change the page to ranking
  toRanker() {
    this.setState({ page: 2 });
  }

  // Change the page to results
  toResults() {
    this.setState({ page: 3 });
  }

  // Render based on the state of page
  render() {
    const { page } = this.state;
    let Page;
    if (page === 1) {
      Page = <Entry changePage={this.toRanker} />;
    } else if (page === 2) {
      Page = <Ranker changePage={this.toResults} />;
    } else if (page === 3) {
      Page = <Results changePage={this.toEntry} />;
    }

    return Page;
  }
}

// Export the App component
export default App;
