import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { mobile } from "../../responsive";

export const ProfilePanelContainer = styled.div`
  margin: 0,
`;

export const InnerHeading = styled.p`
  margin-top: 20px;
  fontSize: 1.5em;
  fontWeight: bold;
  text-align: center;
  width: 100%;
`;

export const InputField = styled(TextField)`
  padding: 3px;
  ${mobile({
    width: "70vw !important",
    height: "20px !important",
    margin: "0 0 2.5rem 0!important"
  })}
`;

export const ButtonGroup = styled.div` 
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyledButton = styled(Button)({
  padding: "10px",
  [mobile]: {
    fontSize: "12px !important",
    width: "40% !important",
    height: "10% !important"
  }
});
