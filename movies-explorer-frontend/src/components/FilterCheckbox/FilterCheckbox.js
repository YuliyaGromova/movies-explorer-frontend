import React from "react";

function FilterCheckbox(props) {
  const stateFilterLocal = JSON.parse(localStorage.getItem("short"));
  const defaultState = (!props.onlyOwn)? (stateFilterLocal !== null)? stateFilterLocal : false : false;
  const [checked, setChecked] = React.useState(defaultState);
const changeFilter = (e) => {
    setChecked(!checked);
    props.filterShort(e.target.checked);
  };

  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        className="filter-checkbox__smalltumb"
        onChange={changeFilter}
        checked={checked}
      ></input>
      <span className="filter-checkbox__smalltumb_visible"></span>
      {props.nameFilter}
    </label>
  );
}

export default FilterCheckbox;
