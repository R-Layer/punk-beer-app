import React from "react";
import "../stylesheets/grid.css";
const Grid = props => {
  return (
    <div className="grid" test={props.test}>
      {props.children}
    </div>
  );
};
export default Grid;
