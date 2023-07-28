import React from "react";

function FilterCheckbox(props) {
  return (
      <label className="filter-checkbox">
        <input type="checkbox" className="filter-checkbox__smalltumb"></input>
        <span className="filter-checkbox__smalltumb_visible"></span> 
        {props.nameFilter}
      </label>
  );
}

export default FilterCheckbox;
