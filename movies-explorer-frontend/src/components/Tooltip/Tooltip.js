import React from "react";

function Tooltip(props) {
    
  function closeTooltip() {
    props.closeTooltip(false);
  }

  return (
    <section className="tooltip">
      <div className="tooltip__container">
        <button
          className="tooltip__close button"
          onClick={closeTooltip}
        ></button>
        <p className="tooltip__message">{props.message}</p>
      </div>
    </section>
  );
}

export default Tooltip;
