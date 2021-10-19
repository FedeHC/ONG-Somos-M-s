import React from "react";
import { Skeleton } from "@chakra-ui/react";

export const SkeletonComponent = () => {
  return (
    <Skeleton
      startColor="green.500"
      endColor="blue.500"
      height="50px"
      isLoaded={false}
    />
  );
};
