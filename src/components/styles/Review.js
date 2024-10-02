import { Divider, styled as muiStyled } from "@mui/material";
import List from "@mui/material/List";
import styled from "styled-components";
import { mobile, ScreenWith670px, ScreenWith960px } from "../../responsive";

// Container for the review section
export const ReviewContainer = muiStyled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  maxWidth: "70%",
  margin: "4rem auto",
  fontSize: "1rem", // Base font size
  lineHeight: "1.5", // Base line height
  "@media only screen and (max-width: 650px)": {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(2), // Reduced margin for smaller screens
    maxWidth: "90%", // Allow more width on smaller screens
    fontSize: "0.95rem", // Slightly smaller font size
    lineHeight: "1.4" // Adjusted line height
  },
  "@media only screen and (max-width: 400px)": {
    padding: theme.spacing(0.5),
    marginTop: theme.spacing(1),
    maxWidth: "95%",
    fontSize: "0.85rem" // Smaller font size for very small screens
  }
}));

// Overall rating and star breakdown
export const RatingSection = muiStyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  fontSize: "1rem", // Base font size
  "@media only screen and (max-width: 650px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: "0.95rem" // Slightly smaller font size
  },
  "@media only screen and (max-width: 400px)": {
    marginBottom: theme.spacing(1), // Reduced bottom margin
    fontSize: "0.85rem" // Smaller font size for very small screens
  }
}));

// Progress bars for rating counts
export const RatingBreakdown = muiStyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25rem",
  marginTop: theme.spacing(1.5),
  gap: theme.spacing(1),
  fontSize: "1rem", // Base font size
  "@media only screen and (max-width: 650px)": {
    width: "100%", // Make it full width on smaller screens
    fontSize: "0.95rem" // Slightly smaller font size
  },
  "@media only screen and (max-width: 400px)": {
    gap: theme.spacing(0.5), // Reduced gap for smaller screens
    fontSize: "0.85rem" // Smaller font size for very small screens
  }
}));

// Styled list for reviews
export const StyledList = muiStyled("div")(({ theme }) => ({
  width: "100%",
  border: "none", // Removed border
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(4),
  fontSize: "1rem", // Base font size
  "@media only screen and (max-width: 650px)": {
    height: "220px",
    width: "95%",
    marginLeft: theme.spacing(1),
    fontSize: "0.95rem" // Slightly smaller font size
  },
  "@media only screen and (max-width: 550px)": {
    height: "auto", // Allow height to adjust automatically
    marginLeft: 0,
    fontSize: "0.85rem" // Smaller font size for very small screens
  },
  "@media only screen and (max-width: 400px)": {
    height: "auto", // Remove fixed height
    marginTop: theme.spacing(2),
    fontSize: "0.75rem" // Even smaller font size for very small screens
  }
}));

export const StyledListItem = muiStyled(List)(({ theme }) => ({
  border: "none", // Removed border
  gap: "3rem",
  fontSize: "1rem", // Base font size
  "@media only screen and (max-width: 650px)": {
    gap: "2.5rem",
    fontSize: "0.95rem" // Slightly smaller font size
  },
  "@media only screen and (max-width: 550px)": {
    gap: "2rem",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(1),
    fontSize: "0.85rem" // Smaller font size for very small screens
  },
  "@media only screen and (max-width: 400px)": {
    gap: "1.5rem", // Further reduced gap for very small screens
    padding: theme.spacing(0.5), // Reduced padding
    fontSize: "0.75rem" // Even smaller font size for very small screens
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
