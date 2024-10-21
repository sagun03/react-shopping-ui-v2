import styled from "styled-components";
import {
  ScreenWith1080px,
  ScreenWith960px,
  mobile,
  mobileSuperSmall,
  tablet
} from "./../../responsive";

export const NavText = styled.p`
  cursor: pointer;
  font-size: 16px;
  ${ScreenWith960px({ fontSize: "13px" })}
  ${mobile({
    display: "none"
  })}
`;

export const PointsItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 50px;

  ${ScreenWith960px({ fontSize: "16px" })}
`;

export const ItemText = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 5px 10px;
`;

export const AccountBoxWrapper = {
  padding: "5px 10px",
  width: "clamp(100px, 30%, 125px)",
  borderRadius: "10px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#0A5BD1",
  position: "absolute",
  top: "50px !important",
  right: "10px",
  zIndex: 1000,
  "& .MuiList-root": {
    gap: ".5rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }
};

export const LogoImg = styled.img`
  height: 48px;
  width: 48px;
  cursor: pointer;
  filter: brightness(1.3);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 6rem;
  margin: 0 auto;
  justify-content: space-between;

  ${ScreenWith1080px({
    width: "95%",
    padding: "20px"
  })}
`;

export const Container = styled.div`
  height: 55px;
  overflow: hidden;
  background-color: #0A5BD1;
  position: fixed;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1299;
`;

export const CartWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  padding: 5px 10px;
  fontsize: 14px;
  transition: all 0.3s ease;
  &:hover {
    // color: #e74c3c;
    cursor: pointer;
    color: white;
    transform: scale(1.05);
    background-color: #e74c3c;
    border-radius: 10px;
  }

  svg {
    margin-right: 4px;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    ${ScreenWith960px({ fontSize: "1.25rem" })}
  }
    ${ScreenWith960px({ padding: "0" })}
  ${mobile({ fontSize: "12px", padding: "0" })}
  
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  ${ScreenWith960px({
    gap: "1.5rem"
  })}
  ${mobile({ gap: ".5rem" })}
`;

export const Right = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.9em"
}));

// export const MenuItem = styled("div")(() => ({
//   fontSize: "14px",
//   cursor: "pointer",
//   display: "flex",
//   alignItems: "center",
//   paddingInline: "5px 5px",
//   color: "white",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     color: "#F44336",
//     transform: "scale(1.1)"
//   },
//   ...mobile({ fontSize: "12px" })
// }));

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  fontsize: 14px;
  cursor: pointer;
  &.active,
  &:hover {
    color: white;
    border-radius: 5px;
    background-color: #e74c3c;
  }
  &.active {
    transform: none;
  }
  &:hover {
    transform: scale(1.05);
  }
  svg {
    margin-right: 8px;
    font-size: 1.5rem;
  }
  ${ScreenWith960px({ fontSize: "13px" })}
  ${mobile({ fontSize: "12px" })}
`;

// export const Center = styled("div")(({ theme }) => ({
//   textAlign: "center"
// }));

export const MenuActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  ${ScreenWith960px({ gap: "1rem" })}
  ${tablet({ display: "none" })}
`;

export const DrawerContaienr = styled.div`
  display: none;
  ${tablet({ display: "flex" })}
`;
