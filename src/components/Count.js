import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const counting = useSelector((state) => state.count);
  const { some } = useSelector((state) => state);
  console.log(counting);
  console.log({ some });
  // console.log("some = " + some);
  return (
    <div>
      <h1>{counting}</h1>
    </div>
  );
};

export default Count;
