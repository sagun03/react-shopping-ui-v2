/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
// ReviewStyles.js
import { styled } from "@mui/material";

export const StyledList = styled("div")(({ theme }) => ({
  width: "90%",
  border: "2px solid steelblue",
  height: "180px",
  overflowY: "scroll",
  marginLeft: theme.spacing(2),
  "@media only screen and (max-width: 768px)": {
    height: "220px",
    width: "95%",
    marginLeft: theme.spacing(1),
  },
  "@media only screen and (max-width: 550px)": {
    height: "280px",
    width: "100%",
    marginLeft: 0,
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  border: "1px solid aliceblue",
  gap: "3rem",
  "@media only screen and (max-width: 768px)": {
    gap: "2.5rem",
  },
  "@media only screen and (max-width: 550px)": {
    gap: "2rem",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(1),
  },
}));
