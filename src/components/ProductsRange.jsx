import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import ProductRangeCard from "./ProductRangeCard";
import SearchIcon from "@mui/icons-material/Search";
import { v4 as uuidv4 } from "uuid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, InputAdornment, Select, TextField } from "@mui/material";
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
import { CATEGORY_MENU, flattenProductSizes } from "../utils/helper";

const ProductsRange = () => {
  const { products } = useDataContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [, setIsFiltered] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const filterProducts = useCallback(
    (category = "", title) => {
      let filtered = products;
      if (category) {
        filtered = products.filter(
          ({ category: productCategory }) => productCategory === category
        );
      }
      setFilteredProducts(filtered);
      setSelectedCategory(title);
      handleMenuClose();
    },
    [products]
  );

  useEffect(() => {
    const param = searchParams.get("name");
    const paramTitle = searchParams.get("title");

    if (param) {
      filterProducts(param, paramTitle);
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams, products, filterProducts]);

  // Sorting logic (applied after flattening)
  const sortProducts = useCallback(
    (a, b) => {
      if (sortOrder === "priceLowToHigh") {
        return a.price - b.price; // Sorting by lowest price first
      } else if (sortOrder === "priceHighToLow") {
        return b.price - a.price; // Sorting by highest price first
      }
      return 0; // Default: no sorting
    },
    [sortOrder]
  );

  useEffect(() => {
    if (searchTerm) {
      setIsFiltered(true);
      setSelectedCategory("All");
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  // Memoized flattening and then sorting products
  const flattenedAndSortedProducts = useMemo(() => {
    // First, flatten the products
    const flattenedProducts = flattenProductSizes(filteredProducts);
    console.log(flattenedProducts, "Flattened Products");

    // Then sort them according to the selected order
    const sorted = flattenedProducts.slice().sort(sortProducts);
    console.log(sorted, "Sorted Products");
    return sorted;
  }, [filteredProducts, sortProducts]);

  return (
    <>
      <Wrapper>
        <Heading>Our Products Range</Heading>
      </Wrapper>
      <ProductHeader>
        <ProductHeaderContainer>
          <ProductHeaderContent>
            <ProductHeaderCount>
              Browse Products ({flattenedAndSortedProducts.length})
            </ProductHeaderCount>
            <ProductHeaderLeft>
              <ProductHeaderLeftContent>
                <HeaderLeftSelect>
                  <Select
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    style={{ minWidth: "8rem" }}
                  >
                    <MenuItem value={"default"}>Default</MenuItem>
                    <MenuItem value={"priceHighToLow"}>Price - High to Low</MenuItem>
                    <MenuItem value={"priceLowToHigh"}>Price - Low to High</MenuItem>
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
                    onChange={(e) => setSearchTerm(e.target.value)}
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
            <ProductMenu title="category">
              Category <Divider style={{ marginTop: "1rem" }} />
            </ProductMenu>
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
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
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
            {flattenedAndSortedProducts.map((product) => (
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
