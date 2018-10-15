import React, { Component } from "react";

import Tile from "../components/Tile";
import FlipMove from "react-flip-move";
import FilterOutBox from "../components/FilterOutBox";

import { connect } from "react-redux";

import { changeFilterString } from "../redux/actions";

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

  render() {
    const filterRegex = new RegExp(this.props.filterPattern, "i");
    const filteredBeerTiles = this.state.beers
      .filter(beer => filterRegex.test(beer.id))
      .map(beer => <Tile key={beer.id} beer={beer} />);
    return (
      <div className="App">
        <FilterOutBox filterOut={this.props.updateFilterString} />
        <FlipMove className="grid" duration="500" staggerDurationBy="20">
          {filteredBeerTiles}
        </FlipMove>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filterPattern: state.filterPattern
});

const mapDispatchToProps = dispatch => ({
  updateFilterString: id => dispatch(changeFilterString(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
