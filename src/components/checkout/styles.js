import styled from "styled-components";
import { styled as MuiStyled } from "@mui/system";
import "./vars.css";

export const StepperContainer = styled.div`
  width: clamp(300px, 40%, 500px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`
export const InnerStepper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
`

export const StepIconRoot = MuiStyled("div")(
  ({ ownerState }) => ({
    display: "flex",
    width: "1.5em",
    height: "1.5em",
    padding: "1em",
    background: ownerState.active || ownerState.completed ? "rgb(240, 193, 75)" : "rgba(0, 0, 0, 0.2)",
    borderRadius: "50%",
    justifyContent: "center",
    zIndex: 99,
    alignItems: "center",
    color: ownerState.active || ownerState.completed ? "white" : "rgba(0, 0, 0, 0.5)"
  })
)

export const StepLabelRoot = MuiStyled("div")(
  ({ ownerState }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: ownerState.active ? "rgb(240, 193, 75)" : "rgba(0, 0, 0, 0.5)"
  })
)

export const IconRootInner = MuiStyled("div")(
  () => ({
    display: "flex",
    alignItems: "center",
    gap: "1em"
  })
)
export const Connector = MuiStyled("div")(
  ({ ownerState }) => ({
    zIndex: 1,
    display: "block",
    width: "15vw",
    border: ownerState.completed.has(ownerState.i - 1) ? "1px dashed rgba(240, 193, 75, 0.9)" : "1px dashed rgba(0, 0, 0, 0.2)"
  })
)
export const LabelRootInner = MuiStyled("div")(
  ({ ownerState }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
    color: ownerState.active ? "red" : ownerState.completed ? "red" : "rgba(0, 0, 0, 0.5)",
    "&:after": {
      content: ownerState.completed && !ownerState.active ? "'✓'" : "''",
      fontSize: "14px",
      display: "block",
      width: "100%",
      height: ownerState.active ? 3 : "none",
      backgroundColor: ownerState.active ? "red" : "none",
      textAlign: "center",
      color: "red",
      borderRadius: "5em"
    },
    marginBottom: "-2.7em"
  })
)

export const StepCompContainer = styled.div`
  z-index: 99;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const ProgressButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  gap: 2px;
  margin-top: 3em;
`
export const ProgressButton = styled.button`
  padding: 0.5em 1em;
  border: none;
  background-color: rgb(240, 193, 75);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #008080;
  }
`
export const DividerStyles = {
  width: "90%",
  marginBlock: "1.5em 1em",
  display: "inline-block"
}
