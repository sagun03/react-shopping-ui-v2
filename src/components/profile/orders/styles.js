import styled from "styled-components";
import { Button, Box, Card, CardContent, CardActions } from "@mui/material";
import { CheckCircle, Error } from "@mui/icons-material";
import { mobile } from "@/responsive";

// Styled Components
const Container = styled("div")({
  padding: "20px",
  maxWidth: "1200px",
  margin: "auto",
  display: "flex", // Added
  justifyContent: "center" // Added
});

const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "200%",
  "@media (min-width:600px)": {
    flexDirection: "row"
  }
});

const OrderCard = styled(Card)({
  display: "contents",
  marginBottom: "20px",
  borderRadius: "8px",
  "@media (min-width:600px)": {
    marginRight: "20px",
    width: "calc(100% - 270px)" // Adjust width to leave space for the sidebar
  }
});

const Header = styled(CardContent)({
  backgroundColor: "#f4f4f4",
  borderBottom: "1px solid #ddd",
  padding: "15px"
});

const BodyContent = styled(CardContent)({
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  "@media (min-width:600px)": {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const Footer = styled(CardActions)({
  padding: "15px",
  borderTop: "1px solid #ddd"
});

const ButtonStyled = styled(Button)({
  margin: "5px"
});

const StatusIcon = styled(CheckCircle)({
  color: "green"
});

const ErrorIcon = styled(Error)({
  color: "red"
});

const Sidebar = styled(Box)({
  width: "100%",
  borderRadius: "8px",
  "@media (min-width:600px)": {
    width: "250px",
    position: "sticky",
    top: "20px"
  }
});

const SidebarItem = styled(Button)({
  margin: "10px 0",
  width: "100%"
});

const OrderDetails = styled(Box)({
  flex: 2
});

const ItemImage = styled("img")({
  width: "100px",
  height: "200px",
  borderRadius: "4px",
  marginRight: "15px",
  "@media (max-width:600px)": {
    width: "80px"
  }
});

const ItemContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px"
});

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
  margin: 30px 40px 60px;
  padding: 20px;
  gap: 2rem;
  background: #bde0ff;
  // width: 90%;
  // display: grid;
  // grid-template-columns: 25% auto;
  ${mobile({
    flexDirection: "column",
    margin: "30px 5px 10px"
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top: 100px;
`;

export {
  Container,
  Body,
  OrderCard,
  Header,
  BodyContent,
  Footer,
  ButtonStyled,
  StatusIcon,
  ErrorIcon,
  Sidebar,
  SidebarItem,
  OrderDetails,
  ItemImage,
  ItemContainer,
  Wrapper,
  Title
}
