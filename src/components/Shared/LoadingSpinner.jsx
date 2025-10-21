import React from "react";
import Container from "./Container";
import { GridLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <Container>
      <div className="h-[60vh] flex justify-center items-center">
        <GridLoader color="#36dd27" size={25} />
      </div>
    </Container>
  );
};

export default LoadingSpinner;
