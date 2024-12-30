import React, { useState, useMemo } from "react";
import {
  Backdrop,
  Badge,
  CircularProgress,
  Divider,
  IconButton,
  Menu
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "@/utils/firebaseAuthCallers";
import Alert from "@/components/common/alerts/Index";
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
  DrawerContainer,
  MenuItemMyUser
} from "./styles";
import logo from "@/assets/images/logo.png";
import PropTypes from "prop-types";
import Search from "@/components/productSearch/Index";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CustomDrawer from "@/components/common/navigation/Hamburger";

const menu = ["Home", "Products", "About"];

const AccountBox = ({
  anchorEl,
  handleClose,
  handleClick,
  onClickHandler,
  user
}) => {
  const points = useSelector((state) => state.point.points);
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
            to="/orders"
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
  const user = useSelector((state) => state.user.currentUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [anchor, setAnchor] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const location = useLocation();
  const theme = useTheme();
  const cartData = useSelector((state) => state.cart.cartData);

  const bannerQuantity = useMemo(() => {
    return cartData.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartData]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickHandler = (e) => {
    try {
      setAnchorEl(null);
      setLoading(true);
      e.preventDefault();
      logoutUser();
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
          <DrawerContainer>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(!anchor)}
            sx={{ color: "white" }}
          >
            {anchor ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          </DrawerContainer>
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
            <Link to="/checkout">
              <Badge
                badgeContent={bannerQuantity}
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
