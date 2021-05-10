import React from "react";
import { useDispatch } from "react-redux";
import { add, sub } from "../store/actions/action";

const Control = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(add())}>+</button>
      <button onClick={() => dispatch(sub())}>-</button>
    </div>
  );
};

export default Control;
//hello
