import React from "react";
import ConnectorLabel from "./ConnectorLabel";
import IconLabel from "./IconLabel";
import { StepCompContainer, Connector, InnerStepper } from "./styles";
import { useStepperContext } from "../../context/StepperContext";

const StepComp = () => {
  const { activeStep, completed, stepLabels, stepIcons, handleStep } = useStepperContext();
  const handleClick = (index) => {
    if (!completed.has(index) && activeStep !== index) {
      handleStep(index);
    }
  };
  return (
    <InnerStepper>
      {stepLabels.map((step, index) => (
        index === 0 ? (
          <span onClick={ handleStep(index) } key={ index }>
            <StepCompContainer key={index}>
              <IconLabel onClick={handleClick(index)} active={activeStep === index} completed={completed.has(index)} icon={stepIcons[index]} />
              <ConnectorLabel active={activeStep === index} completed={completed.has(index)} step={step} />
            </StepCompContainer>
          </span>
        ) : (
          <>
            <Connector key={index} ownerState={{ completed: completed, i: index }}/>
            <span onClick={ handleStep(index) } key={ index }>
              <StepCompContainer key={index}>
                <IconLabel onClick={handleClick(index)} active={activeStep === index} completed={completed.has(index)} icon={stepIcons[index]} />
                <ConnectorLabel active={activeStep === index} completed={completed.has(index)} step={step} />
              </StepCompContainer>
            </span>
          </>
        )
      ))}
    </InnerStepper>
  )
}

export default StepComp;
