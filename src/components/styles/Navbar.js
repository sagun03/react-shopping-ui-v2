import styled from "styled-components";
import { ScreenWith670px, mobile, mobileSuperSmall } from "./../../responsive";

export const MenuIconStyles = {
  fontSize: "30px",
  cursor: "pointer"
}

export const NavText = styled.p`
  cursor: pointer;
  font-size: 16px;
  margin-right: 15px;
  ${mobile({
    display: "none"
  })}
`

export const PointsItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  font-size: 14px;
  font-weight: 200;
  padding: 3px 10px;
  color: white;
  background-color: black;
  border-radius: 50px;
`;

export const ItemText = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 200;
`;

export const AccountBoxWrapper = {
  padding: "10px",
  width: "clamp(100px, 30%, 125px)",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  position: "absolute",
  top: "50px",
  right: "10px",
  zIndex: 1000
}

export const LogoImg = styled.img`
  height: 48px;
  width: 48px;
  cursor: pointer;
  filter: brightness(1.3);
`;

export const Wrapper = styled("div")(() => ({
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

export const Container = styled("div")(() => ({
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
  cursor: "pointer"
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  color: black;
  &:hover {
    color: red;
  }
`;

export const Left = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem"
}));

export const Right = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.9em"
}));

export const MenuItem = styled("div")(() => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  paddingInline: "5px 5px",
  "&:hover": {
    color: "red"
  },
  ...mobile({ fontSize: "12px" })
}));

// export const Center = styled("div")(({ theme }) => ({
//   textAlign: "center"
// }));
