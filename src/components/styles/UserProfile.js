import styled from "styled-components";
import { mobile, lScreen } from "../../responsive";
import { styled as muiStyled } from "@mui/material";
import Button from "@mui/material/Button";

export const TopContainer = styled.div`
  margin-top: 125px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  ${lScreen({
    marginTop: "150px"
  })}
  margin-bottom: 125px;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  ${mobile({
    gap: "10px"
  })}
`;

export const PointsContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: inline-block !important;
  text-align: center;
  height: fit-content !important;
`;

export const ContentPanel = styled.div`
  margin: 0;
`;

export const SideBarContainer = styled.div`
  display: flex;
  ${lScreen({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  })}
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.1em"
  })}
`;

export const ImageContainer = styled.div`
  width: 20vw;
  ${mobile({
    width: "50vw",
    marginBotton: 0
  })}
  ${lScreen({
    width: "200px"
  })}
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const SideBarButtonGroup = styled.div`
  display: flex;
  ${mobile({
    padding: "0.1rem",
    flexDirection: "row",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  })}
`;

export const SideBarButton = muiStyled(Button)(
  ({ theme }) => ({
    border: "1px solid lightgray !important",
    color: "black !important",
    ":hover": {
      backgroundColor: "rgba(0, 128, 128, 0.8) !important",
      color: "white !important"
    },
    [theme.breakpoints.up("xs")]: {
      width: "40vw",
      padding: "10px",
      fontSize: "12px !important"
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      height: "30px",
      padding: "20px",
      fontSize: "16px !important",
      margin: "0.5rem !important"
    }
  })
);

export const Text = styled.p`{
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}`;
