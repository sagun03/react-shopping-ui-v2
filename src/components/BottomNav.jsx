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
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1300;
  display: none;
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

  useEffect(() => {
    const getKeyByValue = (object, value) => {
      return +Object.keys(object).find((key) => object[key] === value);
    };
    setValue(getKeyByValue(bottomNavigationValues, location.pathname));
  }, [setValue, location]);

  return (
    <PaperUi elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
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
        <BottomNavigationActionUi label="Home" icon={<HomeIcon />} />
        <BottomNavigationActionUi label="Products" icon={<LineWeightIcon />} />
        {Boolean(user) && (
          <BottomNavigationActionUi
            label="My Orders"
            icon={<ListAltIcon />}
          />
        )}
        <BottomNavigationActionUi
          label="Cart"
          icon={
            <Badge
              badgeContent={quantity}
              color="primary"
              style={{ marginRight: "2px" }}
            >
              <ShoppingCartOutlined />
            </Badge>
          }
        />
        <BottomNavigationActionUi
          label="Call Us"
          icon={<CallIcon />}
          component="a"
          href="tel:+918755447070"
        />
      </BottomNavigation>
    </PaperUi>
  );
};

export default BottomNav;
