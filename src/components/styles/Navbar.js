import styled from "styled-components";
import { ScreenWith670px, mobile, mobileSuperSmall } from "./../../responsive";

export const MenuIconStyles = {
  fontSize: "1.5rem",
  cursor: "pointer",
  "&:hover": {
    color: "teal"
  }
}

export const LogoImg = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
  filter: brightness(1.3);
`;

export const Wrapper = styled("div")(({ theme }) => ({
  padding: "10px 0px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-around",
  ...ScreenWith670px({
    justifyContent: "space-between",
    width: "95%",
    padding: "10px 10px"
  })
}));

export const Container = styled("div")(({ theme }) => ({
  height: "55px",
  overflow: "hidden",
  backgroundColor: "white",
  position: "fixed",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  top: "0px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1299,
  ...mobile({ top: "0px" }),
  ...mobileSuperSmall({ top: "0px" })
}));
