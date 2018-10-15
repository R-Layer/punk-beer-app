import React, { Component } from "react";

import Grid from "../components/Grid";
import Tile from "../components/Tile";
import PopupList from "../components/PopupList";
import FilterOutBox from "../components/FilterOutBox";

import "../stylesheets/App.css";

class App extends Component {
  state = {
    beers: [],
    filterString: "",
    popupData: {}
  };

  componentDidMount() {
    let fetchOpt = {
      method: "GET",
      cache: "force-cache"
    };
    fetch("https://api.punkapi.com/v2/beers", fetchOpt)
      .then(res => res.json())
      .then(beers => this.setState({ beers }));
  }

  filterOutBeers = id => {
    this.setState(prevState => ({
      filterString: id
    }));
  };

  testApp = popupData => {
    this.setState({
      popupData
    });
  };

  render() {
    const filterRegex = new RegExp(this.state.filterString, "i");
    const filteredBeerTiles = this.state.beers
      .filter(beer => filterRegex.test(beer.id))
      .map(beer => <Tile beer={beer} key={beer.id} test={this.testApp} />);
    return (
      <div className="App">
        <FilterOutBox filterOut={this.filterOutBeers} />
        <h3>{this.state.beers.length}</h3>
        <Grid>{filteredBeerTiles}</Grid>

        <PopupList
          inProp={this.state.popupData.inProp}
          el={this.state.popupData.el}
          coords={this.state.popupData.coords}
        />
      </div>
    );
  }
}

export default App;
