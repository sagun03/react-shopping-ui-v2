import React, { useState, useEffect } from "react";
import {
  Backdrop,
  Badge,
  CircularProgress,
  ListItemIcon,
  ListItemText,
  Menu,
  SwipeableDrawer
} from "@mui/material";
import { ShoppingCartOutlined, Home as HomeIcon1, ExitToApp as ExitToAppIcon, Person as PersonIcon, Reorder as ReorderIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Link, Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useUserContext } from "../context/UserContext";
import Alert from "./Alert";
import { mobile, mobileSuperSmall, ScreenWith670px } from "../responsive";
import { useCartContext } from "../context/cartContext";
import useFetchCartData from "../hooks/custom hooks/useFetchCartData";
// import UserProfile from "../pages/UserProfile";
// import { auth } from "../firebase";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import HomeIcon from "@mui/icons-material/Home";
import {
  LogoImg,
  Wrapper,
  Container,
  MenuIconStyles,
  CartWrapper,
  Left,
  Right,
  AccountBoxWrapper,
  MenuItem
} from "./styles/Navbar";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";

// const Logo = styled("h1")(({ theme }) => ({
//   fontWeight: 400,
//   ...ScreenWith670px({
//     fontSize: "1.5rem"
//   }),
//   ...mobile({ display: "none" })
// }));

// const Logo2 = styled("div")(({ theme }) => ({
//   display: "none",
//   fontWeight: 400,
//   ...mobile({
//     display: "flex",
//     height: "38px",
//     marginRight: "0px"
//   })
// }));

// const MenuItem2 = styled("div")(({ theme }) => ({
//   fontSize: "14px",
//   cursor: "pointer",
//   display: "flex",
//   alignItems: "center",
//   ...mobile({ fontSize: "12px" }),
//   ...ScreenWith670px({ display: "none" })
// }));

const MenuItemMyUser = styled("div")(() => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  ...mobile({ fontSize: "12px" }),
  ...ScreenWith670px({ display: "none" })
}));

// const MenuItemMyUser2 = styled("div")(({ theme }) => ({
//   fontSize: "14px",
//   cursor: "pointer",
//   display: "none",
//   alignItems: "center",
//   ...mobile({ fontSize: "12px" }),
//   ...ScreenWith670px({ display: "flex" })
// }));

const AccountBox = ({ anchorEl, handleClose, handleClick, onClickHandler }) => {
  return (
    <>
      <MenuItemMyUser onClick={handleClick}>
        <AccountBoxIcon sx={MenuIconStyles}/>
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
          <Link to="/profile" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <ManageAccountsIcon fontSize="small" />
            <ListItemText primary="Profile" />
          </Link>
        </MenuItem>

        <MenuItem onClick={onClickHandler}>
          <ExitToAppIcon fontSize="small" />
          <ListItemText primary="Logout" />
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
  onClickHandler: PropTypes.func
}

const NavBar = () => {
  const { user } = useUserContext();
  const userAuth = useUserAuth()
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
      setCartData(null)
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
        {/* <Left>
          <MenuItemMyUser2 onClick={toggleDrawer(true)}>
            <ReorderIcon />
          </MenuItemMyUser2>
          {user && (
            <MenuItem2>
              <Link to="/">
                <HomeIcon sx={MenuIconStyles}/>
              </Link>
            </MenuItem2>
          )}
          {user && (
            <MenuItem2>
              <Link to="/orders">My Orders</Link>
            </MenuItem2>
          )}
        </Left> */}
        {/* <Link to="/">
          <Center>
            <Logo2>
              <img src={Logos} alt="logo" />
            </Logo2>
          </Center>
        </Link> */}
        <Left>
          <Link to="/">
            <LogoImg src={logo} alt="logo" />
          </Link>
        </Left>
        <Right>
          {user ? (
              // <MenuItemMyUser onClick={handleClick}>
              //   {(user?.displayName?.slice(0, 5)?.toUpperCase() ||
              //     user?.email?.slice(0, 5)?.toUpperCase() ||
              //     user?.phoneNumber?.slice(0, 5)) + ".."}
              // </MenuItemMyUser>
              // <MenuItemMyUser2 onClick={handleClick}>
              //   <PersonIcon />
              // </MenuItemMyUser2>
              <AccountBox anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} onClickHandler={onClickHandler}/>
          ) : (
            <>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          <CartWrapper>
            <Link to="/cart">
              <Badge
                badgeContent={quantity}
                color="primary"
                sx={{ marginRight: "10px" }}
              >
                <ShoppingCartIcon/>
                {/* <ShoppingCartOutlined /> */}
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
