import React, { Component } from "react";
import { Transition } from "react-transition-group";

class PopupList extends Component {
  DURATION_IN = 1200;
  DURATION_OUT = 400;

  fakeData = {
    inProp: false,
    el: { clientWidth: 0, innerHTML: "" },
    coords: { left: 0, top: 0 }
  };

  defaultStyle = {
    transition: `max-height ${this.DURATION_IN}ms ease-in-out`,
    maxHeight: "0",
    overflow: "hidden"
  };

  transitionStyles = {
    entering: { maxHeight: "400px" },
    entered: { maxHeight: "400px" },
    exiting: { transition: `max-height ${this.DURATION_OUT}ms ease-in-out` }
  };

  render() {
    let { el, inProp, coords } = this.props;
    if (!el) {
      el = this.fakeData.el;
      inProp = this.fakeData.inProp;
      coords = this.fakeData.coords;
    }
    return (
      <Transition in={inProp} timeout={this.DURATION_IN}>
        {state =>
          React.createElement("ul", {
            style: {
              ...this.defaultStyle,
              ...this.transitionStyles[state],
              ...coords,
              width: el.clientWidth
            },
            className: "extended-list",
            dangerouslySetInnerHTML: {
              __html: el.innerHTML
            }
          })
        }
      </Transition>
    );
  }
}

export default PopupList;
