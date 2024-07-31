/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import ProductRangeCard from "./ProductRangeCard";
import SearchIcon from "@mui/icons-material/Search";
import { v4 as uuidv4 } from "uuid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Divider,
  InputAdornment,
  Select,
  TextField
} from "@mui/material";
import { FilterListOutlined } from "@mui/icons-material";
import {
  Container,
  Heading,
  ProductsWrapper,
  ProductMenuList,
  ProductMenuListMobile,
  ProductMenu,
  ProductImageContainer,
  ProductHeader,
  ProductHeaderContainer,
  ProductHeaderContent,
  ProductHeaderCount,
  ProductHeaderLeft,
  ProductHeaderLeftContent,
  HeaderLeftSelect,
  ProductImageWrapper,
  HeaderLeftSearch,
  Wrapper,
  CustomButton
} from "./styles/Products";
import { flattenProductSizes } from "../utils/helper";

const CATEGORY_MENU = [
  { id: 1, title: "All", name: "" },
  { id: 2, title: "Liquid Detergent", name: "detergent" },
  { id: 3, title: "Hand Wash", name: "handWash" },
  { id: 4, title: "Floor Cleaner", name: "floorCleaner" },
  { id: 6, title: "Dish Washer", name: "dishWasher" },
  { id: 7, title: "Toilet Cleaner", name: "toiletCleaner" },
  { id: 8, title: "Glass Cleaner", name: "colin" }
];

const ProductsRange = () => {
  const { products } = useDataContext();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const filterProducts = useCallback((category = "", title) => {
    if (category) {
      setSearchTerm("");
      const filtered = products.filter(({ category: productCategory }) => productCategory === category);
      console.log("filtered", filtered, category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    setSelectedCategory(title);
    handleMenuClose();
  }, [products, searchParams]);

  useEffect(() => {
    const param = searchParams.get("name");
    const paramTitle = searchParams.get("title");

    if (param) {
      filterProducts(param, paramTitle);
    }
  }, [searchParams, filterProducts]);

  const sortProducts = useCallback((a, b) => {
    if (sortOrder === "priceLowToHigh") {
      return a.sizes[0].price - b.sizes[0].price;
    } else if (sortOrder === "priceHighToLow") {
      return b.sizes[0].price - a.sizes[0].price;
    }
    return 0;
  }, [sortOrder]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setSelectedCategory("All");
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const sortedProducts = useMemo(() => filteredProducts.slice().sort(sortProducts), [filteredProducts, sortProducts]);
  const flattenProducts = flattenProductSizes(sortedProducts);
  console.log("sortedProducts", sortedProducts);
  return (
    <>
      <Wrapper>
        <Heading>Our Products Range</Heading>
      </Wrapper>
      <ProductHeader>
        <ProductHeaderContainer>
          <ProductHeaderContent>
            <ProductHeaderCount>
              Browse Products ({flattenProducts.length})
            </ProductHeaderCount>
            <ProductHeaderLeft>
              <ProductHeaderLeftContent>
                <HeaderLeftSelect>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    style={{ minWidth: "8rem" }}
                  >
                    <MenuItem value={"default"}>Default</MenuItem>
                    <MenuItem value={"priceHighToLow"}>
                      Price - High to Low
                    </MenuItem>
                    <MenuItem value={"priceLowToHigh"}>
                      Price - Low to High
                    </MenuItem>
                  </Select>
                </HeaderLeftSelect>
                <HeaderLeftSearch>
                  <TextField
                    placeholder="Search"
                    variant="outlined"
                    value={searchTerm}
                    InputProps={{
                      style: { height: "2rem" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                    onChange={handleSearchChange}
                  />
                </HeaderLeftSearch>
              </ProductHeaderLeftContent>
            </ProductHeaderLeft>
          </ProductHeaderContent>
        </ProductHeaderContainer>
      </ProductHeader>
      <Container>
        <ProductsWrapper>
          <ProductMenuList>
            <>
              <ProductMenu title="category">
                Category <Divider style={{ marginTop: "1rem" }} />
              </ProductMenu>
            </>
            {CATEGORY_MENU.map(({ id, title, name }) => (
              <ProductMenu
                selected={selectedCategory === title}
                key={id}
                onClick={() => filterProducts(name, title)}
              >
                {title}
              </ProductMenu>
            ))}
          </ProductMenuList>
          <ProductMenuListMobile>
            <CustomButton
              variant="outlined"
              color="inherit"
              startIcon={<FilterListOutlined />}
              onClick={handleMenuClick}
            >
              {selectedCategory}
            </CustomButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              color="inherit"
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              variant={"selectedMenu"}
            >
              {CATEGORY_MENU.map(({ id, title, name }) => (
                <React.Fragment key={id}>
                  {id !== 1 && <Divider />}
                  <MenuItem
                    selected={selectedCategory === title}
                    onClick={() => filterProducts(name, title)}
                  >
                    {title}
                  </MenuItem>
                </React.Fragment>
              ))}
            </Menu>
          </ProductMenuListMobile>
          <ProductImageContainer>
            {flattenProducts.map((product) => (
              <ProductImageWrapper key={uuidv4()}>
                <ProductRangeCard {...product} />
              </ProductImageWrapper>
            ))}
          </ProductImageContainer>
        </ProductsWrapper>
      </Container>
    </>
  );
};

export default ProductsRange;
