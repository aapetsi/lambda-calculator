import React from "react";

const NumberButton = ({ number, id, handleClick }) => {
  return (
    // <div>
    <button onClick={handleClick} className="btn-display" id={id}>
      {number}
    </button>
    // </div>
    // {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};

export default NumberButton;
