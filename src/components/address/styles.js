import styled from "styled-components";
import { styled as MuiStyled } from "@mui/system";
import { TextField } from "@mui/material";
import { mobile, ScreenWith670px } from "../../responsive";
import "../checkout/vars.css";

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--layout-width);
  margin-top: -1em;
  scale: 0.9;
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
  width: var(--layout-width);
  margin-top: var(--top-depth) !important;
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
    height: "clamp(28px, 4.8vw, 48px)",
    backgroundColor: "#008080"
  }
}

export const SmallButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 93%;
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
    color: "#008080",
    border: "1px solid #008080",
    backgroundColor: "rgba(0, 128, 128, 0.1)"
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
  align-items: center;
  width: 98%;
  gap: 10px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
`
export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 0.1fr 2fr; 
  gap: 10px;
  width: var(--layout-width);
  padding: 10px;
  ${mobile({
    display: "block"
  })};
  ${ScreenWith670px({
    display: "block"
  })};
`
export const CartDetail = styled.div`
  display: block;
  height: 90%;
  width: 100%;
  background-color: black;
  ${mobile({
    display: "none"
  })};
  ${ScreenWith670px({
    display: "none"
  })};
`
export const CartDetailMobile = styled.div`
  display: none;
  ${mobile({
    display: "block"
  })};
  ${ScreenWith670px({
    display: "block"
  })};
  height: 500px;
  width: 100%;
  background-color: black;
`
