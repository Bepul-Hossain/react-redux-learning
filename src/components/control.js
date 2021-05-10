import React from "react";
import { useDispatch } from "react-redux";

const Control = () => {
  const dispatch = useDispatch();
  const add = () => {
    dispatch({ type: "ADD" });
  };
  const sub = () => {
    dispatch({ type: "SUB" });
  };
  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
};

export default Control;
