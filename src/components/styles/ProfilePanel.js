import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { lScreen } from "../../responsive";
import { styled as muiStyled } from "@mui/material";
import { Box } from "@mui/system";

export const ProfilePanelContainer = styled.div`
  margin: 0,
`;

export const InnerHeading = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  fontWeight: bold;
  text-align: center;
  width: 100%;
  font-size: 24px;
`;

export const InputField = muiStyled(TextField)(
  ({ theme }) => ({
    padding: "3px",
    [theme.breakpoints.up("xs")]: {
      width: "70vw !important",
      height: "20px !important",
      margin: "0 0 2.5rem 0!important"
    },
    [theme.breakpoints.up("sm")]: {
      width: "220px !important",
      height: "20px !important",
      marginRigth: "1rem !important"
    }
  })
);

export const ButtonGroup = styled.div` 
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  ${lScreen({
  })};
`;

export const StyledButton = muiStyled(Button)(
  ({ theme }) => ({
    padding: "10px",
    [theme.breakpoints.up("xs")]: {
      width: "40% !important",
      height: "10% !important"
    },
    [theme.breakpoints.up("sm")]: {
      width: "120px !important",
      fontSize: "1rem"
    }
  })
);

export const StyledBox = muiStyled(Box)(
  ({ theme }) => ({
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }
  })
)
