import React, { useState, useEffect } from "react";
import {
  Backdrop,
  Badge,
  CircularProgress,
  Divider,
  Menu,
  SwipeableDrawer
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useUserContext } from "../context/UserContext";
import Alert from "./Alert";
import { mobile, ScreenWith670px } from "../responsive";
import { useCartContext } from "../context/cartContext";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  LogoImg,
  Wrapper,
  Container,
  MenuIconStyles,
  CartWrapper,
  Left,
  Right,
  AccountBoxWrapper,
  MenuItem,
  PointsItem,
  ItemText,
  NavText
} from "./styles/Navbar";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import Component from "./Search/Component";
import { usePointsContext } from "../context/PointsContext";

const MenuItemMyUser = styled("div")(() => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: "red"
  },
  ...mobile({ fontSize: "12px" }),
  ...ScreenWith670px({ display: "none" })
}));

const AccountBox = ({ anchorEl, handleClose, handleClick, onClickHandler, user }) => {
  const { points } = usePointsContext();
  return (
    <>
      <MenuItemMyUser onClick={handleClick}>
        <PermIdentityOutlinedIcon sx={MenuIconStyles} />
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
        <MenuItem>
          <PointsItem>
          <MonetizationOnIcon sx={{
            color: "gold",
            fontSize: "16px"
          }} />
          { points }
          </PointsItem>
        </MenuItem>
        <Divider sx={{
          margin: "10px auto",
          width: "90%"
        }}/>
        <MenuItem>
          <Link to="/profile" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <ItemText>
              My Profile
            </ItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="#" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <ItemText>
              My Orders
            </ItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/checkout" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <ItemText>
              Checkout
            </ItemText>
          </Link>
        </MenuItem>
        <Divider sx={{
          margin: "-5px auto 10px auto",
          width: "90%"
        }}/>
        <MenuItem onClick={onClickHandler}>
          Sign out
        </MenuItem>

      </Menu>
    </>
  )
}
// prop validation
AccountBox.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
  handleClick: PropTypes.func,
  onClickHandler: PropTypes.func,
  user: PropTypes.object
}

const NavBar = () => {
  const { user } = useUserContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [error, setError] = useState(false);
  const { logOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  // const { quantity } = useSelector((state) => state.cart);
  const [anchor, setAnchor] = useState(false);
  const { cartData, setCartData } = useCartContext();
  const [quantity, setQuantity] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(user, "user")
    if (cartData) {
      setQuantity(cartData?.totalQuantity)
    }
  }, [cartData]);

  const onClickHandler = async (e) => {
    try {
      setCartData([]);
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
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setAnchor(open);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <LogoImg src={logo} alt="logo" />
          </Link>
        </Left>
        <Right>
          <Component />
          {user ? (
              <AccountBox anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} onClickHandler={onClickHandler} user={user}/>
          ) : (
            <>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
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
                  alignItems: "center"
                }}
              >
                <ShoppingCartOutlinedIcon sx={{
                  fontSize: "25px",
                  cursor: "pointer"
                }}/>
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
      <SwipeableDrawer
        open={anchor}
        anchor="left"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div>Hello</div>
      </SwipeableDrawer>
    </Container>
  );
};

export default NavBar;
