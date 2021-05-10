import React from "react";
import { connect } from "react-redux";

const Control = (props) => {
  return (
    <div>
      <button onClick={() => props.add()}>+</button>
      <button onClick={() => props.sub()}>-</button>
    </div>
  );
};
//action
function mapDispatchToProps(dispatch) {
  return {
    add: () => {
      dispatch({ type: "ADD" });
    },

    sub: () => {
      dispatch({ type: "SUB" });
    },
  };
}
//connect function 1st parameter mapStateToProps ই নিয়ে থাকে । সেজন্য প্রথমে একটা null  দিতে হবে ।
export default connect(null, mapDispatchToProps)(Control);
