import React from "react";

const NumberButton = ({ number, id }) => {
  return (
    // <div>
    <button class="numbers" id={id}>
      {number}
    </button>
    // </div>
    // {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};

export default NumberButton;
