import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  const ids = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
    "period"
  ];
  // STEP 2 - add the imported data to state
  return (
    <div className="numbers-display">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map((number, index) => (
        <NumberButton key={number} id={ids[index]} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
