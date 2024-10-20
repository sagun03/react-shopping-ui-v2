import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@mui/material";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useUserAuth } from "../context/UserAuthContext";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { ScreenWith670px } from "../responsive";
import { useSelector } from "react-redux";

const PaperUi = styled(Paper)`
  position: fixed;
  width: 95%;
  bottom: 10px;
  left: 10px;
  right: 10px;
  z-index: 1300;
  display: none;
  border-radius: 10px !important;
  border: none !important;
  background: none !important;
  ${ScreenWith670px({ display: "block" })}
`;

const BottomNavigationActionUi = styled(BottomNavigationAction)`
  margin-top: 0.5rem;
`;

const bottomNavigationValues = {
  0: "/",
  1: "/products",
  2: "/orders",
  3: "/cart"
};

const BottomNav = () => {
  const { user } = useUserAuth();
  const [value, setValue] = React.useState(0);
  const { quantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getKeyByValue = (object, value) => {
      return +Object.keys(object).find((key) => object[key] === value);
    };
    console.log(getKeyByValue(bottomNavigationValues, location.pathname));
    setValue(getKeyByValue(bottomNavigationValues, location.pathname));
  }, [setValue, location]);
  return (
    <PaperUi elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px !important",
          backgroundColor: "rgba(255, 255, 255, 0.3) !important",
          backdropFilter: "blur(40px)"
        }}
        onChange={(event, newValue) => {
          navigate(bottomNavigationValues[newValue]);
          if (newValue === value) {
            window.location.reload();
            return;
          }
          if (newValue !== 4) {
            setValue(newValue);
          }
        }}
      >
        <BottomNavigationActionUi label="Home" icon={<HomeIcon />} showLabel />
        <BottomNavigationActionUi
          label="Products"
          icon={<LineWeightIcon />}
          showLabel
        />
        {Boolean(user) && (
          <BottomNavigationActionUi
            label="My Orders"
            icon={<ListAltIcon />}
            showLabel
          />
        )}
        <BottomNavigationActionUi
          label="Cart"
          showLabel
          icon={
            <Badge
              badgeContent={quantity}
              color="primary"
              style={{ marginRight: "2px" }}
            >
              <ShoppingCartOutlined />{" "}
            </Badge>
          }
        />
        <a href="tel:+918755447070">
          <BottomNavigationActionUi
            label="Call Us"
            icon={<CallIcon />}
            showLabel
          />
        </a>
      </BottomNavigation>
    </PaperUi>
  );
};

export default BottomNav;
