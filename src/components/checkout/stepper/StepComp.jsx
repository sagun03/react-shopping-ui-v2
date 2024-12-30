import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ConnectorLabel from "./ConnectorLabel";
import IconLabel from "./IconLabel";
import { StepCompContainer, Connector, InnerStepper } from "./styles";
import { setActiveStep } from "@/store/slices/stepperSlice";

const StepComp = () => {
  const dispatch = useDispatch();

  // Select state from Redux store
  const { activeStep, completed, steps } = useSelector((state) => state.stepper);

  const handleClick = (index) => () => {
    if (completed.has(Number(index))) {
      dispatch(setActiveStep(Number(index)));
    }
  };

  return (
    <InnerStepper>
      {Object.keys(steps).map((key, index) => {
        const step = steps[key]; // Get step object
        return index === 0 ? (
          <span onClick={handleClick(key)} key={key}>
            <StepCompContainer>
              <IconLabel
                active={activeStep === Number(key)}
                completed={completed.has(Number(key))}
                icon={steps[key].icon}
              />
              <ConnectorLabel
                active={activeStep === Number(key)}
                completed={completed.has(Number(key))}
                step={steps[key].label}
              />
            </StepCompContainer>
          </span>
        ) : (
          <>
            <Connector key={`connector-${key}`} ownerState={{ completed, i: Number(key) }} />
            <span onClick={handleClick(key)} key={key}>
              <StepCompContainer>
                <IconLabel
                  active={activeStep === Number(key)}
                  completed={completed.has(Number(key))}
                  icon={steps[key].icon}
                />
                <ConnectorLabel
                  active={activeStep === Number(key)}
                  completed={completed.has(Number(key))}
                  step={steps[key].label}
                />
              </StepCompContainer>
            </span>
          </>
        );
      })}
    </InnerStepper>
  );
};

export default StepComp;
