import React from "react";
import ConnectorLabel from "./ConnectorLabel";
import IconLabel from "./IconLabel";
import { StepCompContainer, Connector, InnerStepper } from "./styles";
import { useStepperContext } from "../../context/StepperContext";

const StepComp = () => {
  const { activeStep, completed, stepLabels, stepIcons, totalSteps, handleStep } = useStepperContext();
  return (
    <InnerStepper>
      {stepLabels.map((step, index) => (
        index === totalSteps - 1 ? (
          <span onClick={ handleStep(index) } key={ index }>
            <StepCompContainer key={index}>
              <IconLabel active={activeStep === index} completed={completed.has(index)} icon={stepIcons[index]} />
              <ConnectorLabel active={activeStep === index} completed={completed.has(index)} step={step} />
            </StepCompContainer>
          </span>
        ) : (
          <>
            <span onClick={ handleStep(index) } key={ index }>
              <StepCompContainer key={index}>
                <IconLabel active={activeStep === index} completed={completed.has(index)} icon={stepIcons[index]} />
                <ConnectorLabel active={activeStep === index} completed={completed.has(index)} step={step} />
              </StepCompContainer>
            </span>
            <Connector ownerState={{ active: [activeStep === index], completed: [completed.has(index - 1)] }}/>
          </>
        )
      ))}
    </InnerStepper>
  )
}

export default StepComp;
