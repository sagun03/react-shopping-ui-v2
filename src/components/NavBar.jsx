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
import { ShoppingCartOutlined, Home as HomeIcon, ExitToApp as ExitToAppIcon, Person as PersonIcon, Reorder as ReorderIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
// import { auth } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";
import { useUserContext } from "../context/UserContext";
import Alert from "./Alert";
import Logos from "../pages/images/logo.png";
import { mobile, mobileSuperSmall, ScreenWith670px } from "../responsive";
import { useCartContext } from "../context/cartContext";
import useFetchCartData from "../hooks/custom hooks/useFetchCartData";

const Container = styled("div")(() => ({
  height: "55px",
  overflow: "hidden",
  backgroundColor: "white",
  position: "fixed",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  top: "0px",
  width: "100%",
  zIndex: 1299,
  ...mobile({ top: "0px" }),
  ...mobileSuperSmall({ top: "0px" })
}));

const Wrapper = styled("div")(() => ({
  padding: "10px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  ...ScreenWith670px({
    justifyContent: "space-between",
    width: "95%",
    padding: "10px 10px"
  })
}));

const Left = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem"
}));

const Center = styled("div")(() => ({
  textAlign: "center"
}));

const Logo = styled("h1")(() => ({
  fontWeight: 400,
  ...ScreenWith670px({
    fontSize: "1.5rem"
  }),
  ...mobile({ display: "none" })
}));

const Logo2 = styled("div")(() => ({
  display: "none",
  fontWeight: 400,
  ...mobile({
    display: "flex",
    height: "38px",
    marginRight: "0px"
  })
}));

const Right = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem"
}));

const MenuItem = styled("div")(() => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  ...mobile({ fontSize: "12px" })
}));

const MenuItem2 = styled("div")(() => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  ...mobile({ fontSize: "12px" }),
  ...ScreenWith670px({ display: "none" })
}));

const MenuItemMyUser = styled("div")(() => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  ...mobile({ fontSize: "12px" }),
  ...ScreenWith670px({ display: "none" })
}));

const MenuItemMyUser2 = styled("div")(() => ({
  fontSize: "14px",
  cursor: "pointer",
  display: "none",
  alignItems: "center",
  ...mobile({ fontSize: "12px" }),
  ...ScreenWith670px({ display: "flex" })
}));

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
  const [quantity, setQuantity] = useState(0)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dataFetched = useFetchCartData(user);
  useEffect(() => {
    if (dataFetched) {
      setCartData(dataFetched);
      setQuantity(cartData?.totalQuantity)
    }
  }, [cartData, dataFetched, setCartData]);
  const onClickHandler = async (e) => {
    try {
      setCartData(null)
      setAnchorEl(null);
      setLoading(true);
      e.preventDefault();
      await logOut();
      setTimeout(() => {
        setLoading(false);
        window.location.reload();
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
          <MenuItemMyUser2 onClick={toggleDrawer(true)}>
            <ReorderIcon />
          </MenuItemMyUser2>
          {user && (
            <MenuItem2>
              <Link to="/">
                <HomeIcon />
              </Link>
            </MenuItem2>
          )}
          {user && (
            <MenuItem2>
              <Link to="/orders">My Orders</Link>
            </MenuItem2>
          )}
        </Left>
        <Link to="/">
          <Center>
            <Logo>JK Total Washing Solutions</Logo>
            <Logo2>
              <img src={Logos} alt="logo" />
            </Logo2>
          </Center>
        </Link>
        <Right>
          {user ? (
            <>
              <MenuItemMyUser onClick={handleClick}>
                {(user?.displayName?.slice(0, 5)?.toUpperCase() ||
                  user?.email?.slice(0, 5)?.toUpperCase() ||
                  user?.phoneNumber?.slice(0, 5)) + ".."}
              </MenuItemMyUser>
              <MenuItemMyUser2 onClick={handleClick}>
                <PersonIcon />
              </MenuItemMyUser2>
              <Menu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    backgroundColor: "#2979ff",
                    color: "white",
                    marginTop: "10px",
                    "&:hover": {
                      backgroundColor: "teal"
                    }
                  }
                }}
              >
                <MenuItem onClick={onClickHandler}>
                  <ListItemIcon sx={{ color: "white" }}>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ marginRight: "18px" }} />
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          <MenuItem2 item="cart">
            <Link to="/cart">
              <Badge
                badgeContent={quantity}
                color="primary"
                sx={{ marginRight: "10px" }}
              >
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem2>
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
