/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { styled as MuiStyled } from "@mui/system";
import { TextField, Radio } from "@mui/material";
import { mobile, ScreenWith670px } from "../../responsive";
import "../checkout/vars.css";

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`
export const InnerHeading = styled.p`
  width: 96%;
  text-align: left;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 10px;
`
export const Wrapper = styled.div`
  margin-top: var(--top-depth) !important;
  margin-bottom: var(--bottom-depth) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
    margin: 0 auto;

`
export const StyledTextField = MuiStyled(TextField)(
  ({ theme }) => ({
    width: "98%",
    height: "clamp(2.8rem, 5vw, 50px)"
  })
);

export const ButtonStyles = {
  width: "100%",
  height: "clamp(2.8rem, 5vw, 50px)",
  marginTop: "10px",
  "&:hover": {
    width: "99%",
    height: "clamp(28px, 5vw, 50px)",
    backgroundColor: "transparent",
    color: "black",
    border: "1px solid black"
  }
}

export const SmallButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;
  padding-right: 1%;
  width: 94%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  gap: 20px;
`
export const ChipGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 95%;
`
export const ChipStyles = {
  width: "90px",
  borderRadius: "20px",
  fontSize: "12px",
  padding: "3px",
  border: "1px solid rgba(0, 0, 0, 0.5)",
  color: "rgba(0, 0, 0, 0.5)",
  "&:hover": {
    color: "White",
    border: "1px solid #F44336",
    backgroundColor: "#F44336"
  }
}

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

export const CommonText = styled.p`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 200;
  margin-left: -5px;
`
export const ErrorBoxContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 98%;
  gap: 10px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  margin-block: 10px;
`
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  width: 90%;
  margin-top:1.5rem;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    padding: "0"
  })};
  ${ScreenWith670px({
    flexDirection: "column",
    alignItems: "center",
    padding: "0"
  })};
`
export const CartDetail = styled.div`
  display: block;
  flex: 1 1 0;
  border-radius: 5px;
  ${mobile({
    display: "none"
  })};
  ${ScreenWith670px({
    display: "none"
  })};
`
export const CartDetailMobile = styled.div`
  display: none;
  border-radius: 5px;
  ${mobile({
    display: "block"
  })};
  ${ScreenWith670px({
    display: "block"
  })};


`
export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #e0e0e0;
  background-color: #e0e0e0;
  border-radius: 5px;      
  width: 100%;
  padding-bottom: 5px;    
  cursor: pointer;
`
export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`
export const LeftPanel = styled.div`
  height: var(--panel-height);
  margin-right: 5px;
  flex: 2 1 0;
`
export const ButtonGroup = styled.div` 
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const AddCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  padding-left: 10px;
`
export const StyledRadio = MuiStyled(Radio)(
  ({ theme }) => ({
    color: "red",
    "&.Mui-checked": {
      color: "red"
    }
  })
);
