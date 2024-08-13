import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import Button from "@mui/material/Button";

export const TopContainer = styled.div`
  margin-top: 100px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  })}
`;

export const UserProfileContainer = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  
`;

export const ContentPanel = styled.div`
  margin: 0,

`;

export const SideBarContainer = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.1em"
  })}
`;

export const ImageContainer = styled.div`
  ${mobile({
    width: "40vw",
    marginBotton: 0
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

export const SideBarButton = styled(Button)({
  padding: "10px",
  border: "1px solid lightgray !important",
  color: "black !important",
  ":hover": {
    backgroundColor: "rgba(0, 128, 128, 0.8) !important",
    color: "white !important"
  },
  [mobile]: {
    width: "35vw",
    fontSize: "10px !important"
  }
});
