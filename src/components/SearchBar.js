import React, { Component } from "react";

class SearchBar extends Component {
  //   onInputChange(e) {
  //     console.log(e.target.value);
  //   }
  state = { term: "Image" };
  // use constructor
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="io segment">
        <form
          className="ui form"
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
            {/* <input type="text" onChange={this.onInputChange} /> */}
            {/* <input
              type="text"
              onChange={(event) => console.log(event.target.value)}
            /> */}
            <p>{this.state.term}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
