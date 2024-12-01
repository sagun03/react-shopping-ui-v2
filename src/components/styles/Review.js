import { Divider, styled as muiStyled } from "@mui/material";
import List from "@mui/material/List";
import styled from "styled-components";
import { mobile, ScreenWith670px, ScreenWith960px } from "../../responsive";

// Container for the review section
export const ReviewContainer = muiStyled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  maxWidth: "80%",
  alignContent: "center",
  alignItems: "center",
  margin: "3rem auto",
  borderRadius: "10px",
  marginBottom: "30px",
  backgroundColor: "rgb(249, 249, 249)",
  gap: "3rem",
  display: "flex",
  flexDirection: "column",
  padding: "30px 50px 50px 50px",

  "@media only screen and (max-width: 550)": {
    height: "max-content"
  }
}));

// Overall rating and star breakdown
export const RatingSection = muiStyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // "@media only screen and (max-width: 650)": {
  //   flexDirection: "column"
  // },
  justifyContent: "space-between"
}));

// Progress bars for rating counts
export const RatingBreakdown = muiStyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25rem",
  marginTop: theme.spacing(1.5),
  gap: theme.spacing(1),
  "@media only screen and (max-width: 550px)": {
    width: "15rem"
  },
  "@media only screen and (max-width: 990px)": {
    width: "20rem"
  }
}));

// Styled list for reviews
export const StyledList = muiStyled("div")(({ theme }) => ({
  width: "100%",
  border: "none", // Removed border
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(4),
  "@media only screen and (max-width: 650)": {
    width: "95%",
    marginLeft: theme.spacing(1)
  },
  "@media only screen and (max-width: 550px)": {
    width: "100%",
    marginLeft: 0
  }
}));

export const StyledListItem = muiStyled(List)(({ theme }) => ({
  border: "none", // Removed border
  gap: "3rem",
  "@media only screen and (max-width: 650)": {
    gap: "2.5rem"
  },
  "@media only screen and (max-width: 550px)": {
    gap: "2rem",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(1)
  }
}));

export const RatingWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: rem;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  padding: 2rem;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
   ${ScreenWith670px({ alignItems: "center" })}
  ${ScreenWith960px({ flexDirection: "column", width: "20rem" })}
`;

export const CustomDivider = styled.hr`
  width: 100%;
  border: ${({ orientation }) =>
    orientation === "horizontal"
      ? "1px solid rgba(0, 0, 0, 0.12)"
      : "1px solid rgba(0, 0, 0, 0.12)"};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  ${mobile({ flexDirection: "column" })}
  ${ScreenWith670px({ flexDirection: "column" })}
`;

export const RatingContainer = styled.div`
  position: sticky;
  top: 10%;
  height: max-content;

  ${mobile({ position: "static", top: "auto", height: "auto" })}
  ${ScreenWith670px({ display: "flex", top: "auto", height: "auto", alignItems: "center", justifyContent: "center" })}

`;
