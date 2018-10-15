import React from "react";

const FilterOutBox = ({ filterOut }) => {
  return (
    <div>
      <input onChange={e => filterOut(e.target.value)} />
      <hr />
    </div>
  );
};

export default FilterOutBox;
