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
export const RatingSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
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
export const RatingBreakdown = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25rem",
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
export const StyledList = styled("div")(({ theme }) => ({
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

export const StyledListItem = styled(List)(({ theme }) => ({
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
