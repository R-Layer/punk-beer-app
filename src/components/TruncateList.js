import React, { Component } from "react";

import "../stylesheets/truncate-list.css";

class TruncateList extends Component {
  state = {
    hovering: false,
    filteredList: [],
    top: 0,
    left: 0
  };

  handleHover = e => {
    const actualList = e.target.closest(".values-list");
    const coords = actualList.getBoundingClientRect();

    this.setState(
      prevState => ({
        top: coords.top + window.pageYOffset,
        left: coords.left,
        hovering: !prevState.hovering,
        el: actualList
      }),
      this.setPackage
    );
  };

  setPackage = () => {
    let popupData = {
      inProp: this.state.hovering,
      el: this.state.el,
      coords: { left: this.state.left + "px", top: this.state.top + "px" }
    };

    this.props.test(popupData);
  };

  listValues = valuesToList => {
    if (Array.isArray(valuesToList)) {
      let valueList = valuesToList.map((value, index) => (
        <li key={value + index}>{value.name}</li>
      ));
      return valueList;
    } else {
      return <li>{valuesToList}</li>;
    }
  };

  listKeys = objectToList => {
    const keyArray = Object.keys(objectToList);
    const keyList = keyArray.map(singleKey => {
      const keyValues = this.listValues(objectToList[singleKey]);
      return (
        <section key={singleKey}>
          <h5 className="key-header">{singleKey.toUpperCase()}</h5>
          <ul
            className="values-list"
            onMouseOver={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            {keyValues}
          </ul>
        </section>
      );
    });
    return keyList;
  };

  render() {
    const objectList = this.listKeys(this.props.elements);
    return (
      <div>
        <div>{objectList}</div>
      </div>
    );
  }
}

export default TruncateList;
