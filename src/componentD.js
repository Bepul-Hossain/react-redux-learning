import React, { useContext } from "react";
import { NumberContext, ProfileContext } from "./App";

const Display = () => {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  const value = useContext(NumberContext);
  const profile = useContext(ProfileContext);
  return (
    <div>
      The answer is {value} and {profile}
    </div>
  );
};

export default Display;

//as simple by using useContext hook
