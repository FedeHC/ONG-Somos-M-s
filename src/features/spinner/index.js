import React from "react";
import Loader from "react-loader-spinner";
export const Spinner = ({
  type = "ThreeDots",
  color = "blue",
  height = 80,
  width = 80,
}) => {
  return (
      <Loader type={type} color={color} height={height} width={width} />
  );
};