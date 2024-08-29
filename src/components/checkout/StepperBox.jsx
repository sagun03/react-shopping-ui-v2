import React from "react";
import { StepperContainer } from "./styles";
import StepComp from "./StepComp";
import ProgressButtons from "./ProgressButtons";

const StepperBox = () => {
  return (
    <StepperContainer>
      <StepComp />
      <ProgressButtons />
    </StepperContainer>
  )
}

export default StepperBox;
