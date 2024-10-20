import React, { useState } from "react";
import {
  Backdrop,
  Badge,
  CircularProgress,
  Divider,
  IconButton,
  Menu,
  SwipeableDrawer
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link, useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { useUserContext } from "../../context/UserContext";
import Alert from "../Alert";
import { mobile, ScreenWith960px } from "../../responsive";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  LogoImg,
  Wrapper,
  Container,
  CartWrapper,
  Left,
  Right,
  AccountBoxWrapper,
  MenuItem,
  PointsItem,
  ItemText,
  NavText,
  MenuActions,
  DrawerContaienr
} from "../styles/Navbar";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import Search from "../Search";
import { usePointsContext } from "../../context/PointsContext";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CustomDrawer from "./CustomeDrawer";

const menu = ["Home", "Products", "About Us", "Contact Us"];

export const MenuItemMyUser = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 5px 10px;
  color: white;
  background-color: ${({ selected }) => (selected ? "#e74c3c" : "transparent")};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e74c3c;
    color: white;
    transform: scale(1.05);
    border-radius: 10px;
  }
  svg {
    margin-right: 4px;
    font-size: 1.5rem;
    ${ScreenWith960px({ fontSize: "1.25rem" })}
    ${mobile({
      margin: "0"
    })}
  }
  ${ScreenWith960px({ fontSize: "13px" })}
  ${mobile({
    fontSize: "12px",
    padding: "0"
  })}
`;

const AccountBox = ({
  anchorEl,
  handleClose,
  handleClick,
  onClickHandler,
  user
}) => {
  const { points } = usePointsContext();
  return (
    <>
      <MenuItemMyUser selected={Boolean(anchorEl)} onClick={handleClick}>
        <PermIdentityOutlinedIcon />
        <NavText>{user.displayName}</NavText>
      </MenuItemMyUser>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: AccountBoxWrapper
        }}
      >
        <ItemText>
          <PointsItem>
            <MonetizationOnIcon
              sx={{
                color: "gold",
                fontSize: "20px",
                marginRight: "5px"
              }}
            />
            {points}
          </PointsItem>
        </ItemText>
        <Divider
          sx={{
            // margin: "10px auto",
            backgroundColor: "white",
            width: "90%"
          }}
        />
        <MenuItem>
          <Link
            to="/profile"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            My Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="#"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            My Orders
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/checkout"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Checkout
          </Link>
        </MenuItem>
        <Divider
          sx={{
            // margin: "10px auto",
            backgroundColor: "white",
            width: "90%"
          }}
        />
        <MenuItem onClick={onClickHandler}>Sign out</MenuItem>
      </Menu>
    </>
  );
};
// prop validation
AccountBox.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
  handleClick: PropTypes.func,
  onClickHandler: PropTypes.func,
  user: PropTypes.object
};

const NavBar = () => {
  const { user } = useUserContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [error, setError] = useState(false);
  const { logOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  // const { quantity } = useSelector((state) => state.cart);
  const [anchor, setAnchor] = useState(false);
  const { quantity, ...rest } = useSelector((state) => state.cart);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const location = useLocation();
  const theme = useTheme();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickHandler = async (e) => {
    try {
      setAnchorEl(null);
      setLoading(true);
      e.preventDefault();
      await logOut();
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor(open);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <DrawerContaienr>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(!anchor)}
            sx={{ color: "white" }}
          >
            {anchor ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          </DrawerContaienr>
          <Link to="/">
            <LogoImg src={logo} alt="logo" />
          </Link>
          <MenuActions>
            {menu.map((item, index) => {
              const path = item === "Home" ? "/" : "/" + item.toLowerCase();
              return (
                <Link key={index} to={path}>
                  <MenuItem
                    to={path}
                    key={index}
                    className={location.pathname === path ? "active" : ""}
                  >
                    {item}
                  </MenuItem>
                </Link>
              );
            })}
          </MenuActions>
        </Left>
        <Right>
          <Search />
          {user ? (
            <AccountBox
              anchorEl={anchorEl}
              handleClose={handleClose}
              handleClick={handleClick}
              onClickHandler={onClickHandler}
              user={user}
            />
          ) : (
            <>
              <Link to="/login">
                <MenuItem>
                  <LoginIcon />
                  Sign In
                </MenuItem>
              </Link>
            </>
          )}
          <CartWrapper>
            <Link to="/checkout/cart">
              <Badge
                badgeContent={quantity}
                color="primary"
                sx={{
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "13px"
                  },
                  "&:hover": {
                    "& .MuiBadge-badge": {
                      backgroundColor: "white",
                      color: "#E74C3C"
                    }
                  },
                  "& .MuiBadge-badge": {
                    backgroundColor: "#E74C3C",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                  }
                }}
              >
                <ShoppingCartOutlinedIcon />
                <NavText>Cart</NavText>
              </Badge>
            </Link>
          </CartWrapper>
        </Right>
      </Wrapper>
      {error && (
        <Alert
          open={error}
          type={"error"}
          message={"Something Went Wrong, Please try again"}
          setOpen={setError}
        />
      )}
      <Backdrop open={loading} onClick={() => setLoading(false)}>
        <CircularProgress color="primary" />
      </Backdrop>
      {/* <SwipeableDrawer
        open={anchor}
        anchor="left"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          top: "65px"
        }}
      >
        <div>Hello</div>
      </SwipeableDrawer> */}
      <CustomDrawer anchor={anchor} toggleDrawer={toggleDrawer} />
    </Container>
  );
};

export default NavBar;
