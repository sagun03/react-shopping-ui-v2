import styled from "styled-components";
import { ScreenWith670px, mobile, mobileSuperSmall } from "./../../responsive";

export const MenuIconStyles = {
  fontSize: "38px",
  cursor: "pointer",
  "&:hover": {
    color: "teal"
  }
}

export const AccountBoxWrapper = {
  backgroundColor: "transparent",
  backdropFilter: "blur(50px)",
  color: "black",
  marginTop: "10px",
  padding: "0 !important",
  width: "110px"
}

export const LogoImg = styled.img`
  height: 48px;
  width: 48px;
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

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.1rem;
  background-color: teal;
  border-radius: 5px;
  color: white;
  padding: 3px;
  padding-left: 13px;
`;

export const Left = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem"
}));

export const Right = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem"
}));

export const MenuItem = styled("div")(({ theme }) => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  paddingInline: "5px 5px",
  "&:hover": {
    backgroundColor: "teal",
    color: "white"
  },
  ...mobile({ fontSize: "12px" })
}));

// export const Center = styled("div")(({ theme }) => ({
//   textAlign: "center"
// }));
