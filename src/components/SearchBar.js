import React, { Component } from "react";

class SearchBar extends Component {
  //   onInputChange(e) {
  //     console.log(e.target.value);
  //   }
  onFormSubmit(event) {
    event.preventDefault();
  }
  state = { term: "Image" };
  render() {
    return (
      <div className="io segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
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
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
