import { styled } from "@mui/material";
import List from "@mui/material/List";

// Container for the review section
export const ReviewContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  marginTop: theme.spacing(4),
  maxWidth: "70%",
  margin: "4rem auto",
  "@media only screen and (max-width: 650)": {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(4)
  }
}));

// Overall rating and star breakdown
export const RatingSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  "@media only screen and (max-width: 650)": {
    flexDirection: "column"
  }
}));

// Progress bars for rating counts
export const RatingBreakdown = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25rem",
  gap: theme.spacing(1),
  "@media only screen and (max-width: 650px)": {
    width: "12rem"
  }
}));

// Styled list for reviews
export const StyledList = styled("div")(({ theme }) => ({
  width: "100%",
  border: "none", // Removed border
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(4),
  "@media only screen and (max-width: 650)": {
    height: "220px",
    width: "95%",
    marginLeft: theme.spacing(1)
  },
  "@media only screen and (max-width: 550px)": {
    height: "280px",
    width: "100%",
    marginLeft: 0
  }
}));

export const StyledListItem = styled(List)(({ theme }) => ({
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
