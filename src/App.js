// App.js
// by Umair Khan

// Main component that coordinates flow.

// Imports
import React from "react";
import Entry from "./Entry";
import Validate from "./Validate";
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
    this.toValidate = this.toValidate.bind(this);
    this.toRanker = this.toRanker.bind(this);
    this.toResults = this.toResults.bind(this);
  }

  // Change the page to item entry
  toEntry() {
    this.setState({ page: 1 });
  }

  // Change the page to validation
  toValidate() {
    this.setState({ page: 2 });
  }

  // Change the page to ranking
  toRanker() {
    this.setState({ page: 3 });
  }

  // Change the page to results
  toResults() {
    this.setState({ page: 4 });
  }

  // Render based on the state of page
  render() {
    switch (this.state.page) {
      case 1:
        return <Entry nextPage={this.toValidate} />;
      case 2:
        return <Validate nextPage={this.toRanker} />;
      case 3:
        return <Ranker nextPage={this.toResults} />;
      case 4:
        return <Results nextPage={this.toEntry} />;
      default:
        return <Entry nextPage={this.toValidate} />;
    }
  }
}

// Export the App component
export default App;
