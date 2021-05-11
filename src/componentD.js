import React from "react";
import { NumberContext } from "./App";
const Display = () => {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <NumberContext.Consumer>
      {(value) => {
        return <div>The answer is {value}.</div>;
      }}
    </NumberContext.Consumer>
  );
};

export default Display;
