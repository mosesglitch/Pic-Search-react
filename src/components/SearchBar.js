import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="io segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
            <input
              type="text"
              onChange={(event) => console.log(event.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
