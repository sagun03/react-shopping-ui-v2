/* eslint-disable react/prop-types */
import {
  SwipeableDrawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  ListItemIcon
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { flattenProductSizes } from "../../utils/helper";

const CustomDrawer = ({ anchor, toggleDrawer }) => {
  const { products } = useDataContext();
  const flattenedProducts = flattenProductSizes(products);

  const [openProducts, setOpenProducts] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  const handleToggleProducts = () => setOpenProducts(!openProducts);
  const handleToggleCategories = () => setOpenCategories(!openCategories);

  const textStyle = {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    pointer: "cursor",
    transition: "all 0.3s ease"
  };

  return (
    <SwipeableDrawer
      open={anchor}
      anchor="left"
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        transition: "all 0.3s ease",
        "& .MuiDrawer-paper": {
          width: "100%",
          background: "linear-gradient(180deg, #2691E3, #0A5BD1)",
          overflow: "auto",
          top: "68px !important",
          height: "-webkit-fill-available",
          paddingBottom: "80px"
        }
      }}
    >
      <List
        sx={{
          padding: 2
        }}
      >
        <ListItem button component={Link} to="/">
          <ListItemText primary="HOME" sx={textStyle} />
        </ListItem>
        <Divider sx={{ margin: "10px 0" }} />

        <ListItem button onClick={handleToggleProducts}>
          <ListItemText primary="OUR PRODUCTS" sx={textStyle} />
          {openProducts ? (
            <ExpandLess sx={{ color: textStyle.color }} />
          ) : (
            <ExpandMore sx={{ color: textStyle.color }} />
          )}
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" >
            {flattenedProducts.map((product) => (
              <ListItem key={product.id} button sx={{
                pl: 4,
                pointer: "cursor",
                transition: "all 0.3s ease",
                "&:hover": { transform: "scale(1.05)" }
              }}
              component={Link}
              to={`/product/${product.id}`}
              onClick={toggleDrawer(false)}
              >
                <ListItemIcon sx={{ marginTop: "5px", marginRight: "10px" }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                      height: "70px",
                      borderRadius: "5px",
                      objectFit: "contain"
                    }}
                  />
                </ListItemIcon>

                <ListItemText
                  primary={`${product.name} (${product.size})`}
                  secondary={`Price: Rs. ${product.price}`}
                  sx={{
                    ...textStyle,
                    color: "#FFD700",
                    fontSize: "15px",
                    wordBreak: "break-all"
                  }}
                  secondaryTypographyProps={{ style: { color: "#FFD700" } }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <Divider sx={{ margin: "10px 0" }} />

        <ListItem button onClick={handleToggleCategories}>
          <ListItemText primary="Categories" sx={textStyle} />
          {openCategories ? (
            <ExpandLess sx={{ color: textStyle.color }} />
          ) : (
            <ExpandMore sx={{ color: textStyle.color }} />
          )}
        </ListItem>
        <Collapse in={openCategories} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/category1" sx={{ pl: 4 }}>
              <ListItemText primary="Category 1" sx={textStyle} />
            </ListItem>
            <ListItem button component={Link} to="/category2" sx={{ pl: 4 }}>
              <ListItemText primary="Category 2" sx={textStyle} />
            </ListItem>
            <ListItem button component={Link} to="/category3" sx={{ pl: 4 }}>
              <ListItemText primary="Category 3" sx={textStyle} />
            </ListItem>
          </List>
        </Collapse>

        <Divider sx={{ margin: "10px 0" }} />

        <ListItem button component={Link} to="/about">
          <ListItemText primary="ABOUT US" sx={textStyle} />
        </ListItem>

        <Divider sx={{ margin: "10px 0" }} />

        <ListItem button component={Link} to="/contact">
          <ListItemText primary="CONTACT US" sx={textStyle} />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default CustomDrawer;
