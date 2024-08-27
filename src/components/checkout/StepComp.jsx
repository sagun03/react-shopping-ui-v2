import React from "react";
import ConnectorLabel from "./ConnectorLabel";
import IconLabel from "./IconLabel";
import { StepCompContainer, Connector, InnerStepper } from "./styles";
import PropTypes from "prop-types";

const StepComp = ({ active, completed, steps, icons, total }) => {
  console.log(active);
  return (
    <InnerStepper>
      {
        steps.map((_, index) => (
          index === total - 1 ? (
            <StepCompContainer key={index}>
              <IconLabel active={active === index} completed={completed.has(index)} icon={icons[index]} />
              <ConnectorLabel active={active === index} completed={completed.has(index)} step={steps[index]} />
            </StepCompContainer>
          ) : (
            <>
              <StepCompContainer key={index}>
                <IconLabel active={active === index} completed={completed.has(index)} icon={icons[index]} />
                <ConnectorLabel active={active === index} completed={completed.has(index)} step={steps[index]} />
              </StepCompContainer>
              <Connector ownerState={{ active: [active === index], completed: [completed.has(index - 1)] }}/>
            </>
          )
        )
        )
      }
    </InnerStepper>
  )
}

StepComp.propTypes = {
  active: PropTypes.number.isRequired,
  completed: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  iconIndex: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default StepComp;
