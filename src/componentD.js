import React from "react";
import { NumberContext, ProfileContext } from "./App";

const Display = () => {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <NumberContext.Consumer>
      {(value) => {
        return (
          <div>
            <ProfileContext.Consumer>
              {(profile) => {
                return (
                  <div>
                    The answer is {value} and {profile}
                  </div>
                );
              }}
            </ProfileContext.Consumer>
            ;
          </div>
        );
      }}
    </NumberContext.Consumer>
  );
};

export default Display;
