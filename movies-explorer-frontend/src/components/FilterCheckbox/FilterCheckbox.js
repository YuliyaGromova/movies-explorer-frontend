import React from "react";

function FilterCheckbox(props) {
  const filter = (e) => {
    props.filter(e.target.checked);
  };

  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        className="filter-checkbox__smalltumb"
        onClick={filter}
      ></input>
      <span className="filter-checkbox__smalltumb_visible"></span>
      {props.nameFilter}
    </label>
  );
}

export default FilterCheckbox;
