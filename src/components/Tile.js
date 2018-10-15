import React, { Component } from "react";

import TruncateList from "./TruncateList";

import "../stylesheets/tile.css";

class Tile extends Component {
  render() {
    const { beer } = this.props;
    return (
      <li className="tile" key={beer.id}>
        <h2 className="tile-title">
          {beer.name} - {beer.id}
        </h2>
        <img className="tile-img" src={beer.image_url} alt="beer-preview" />
        <p className="tile-description">{beer.description}</p>
        <div className="tile-details">
          <TruncateList test={this.props.test} elements={beer.ingredients} />
        </div>
      </li>
    );
  }
}

export default Tile;
