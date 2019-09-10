import React from "react";

const SpecialButton = ({ char }) => {
  return (
    <button className="special-btn btn-display">{char}</button>
    // {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};

export default SpecialButton;
