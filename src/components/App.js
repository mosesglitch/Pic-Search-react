import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageLIst from "./ImageLIst";
class App extends React.Component {
  state = { images: [] };
  // async onSearchSubmit(term) {
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    // .then((response) => {
    //   console.log(response.data.results);
    // });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageLIst images={this.state.images} />
      </div>
    );
  }
}

export default App;
