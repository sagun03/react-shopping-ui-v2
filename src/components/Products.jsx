/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { popularProducts } from "../utils/data"
import Product from "./Product"
// import Plane from "../pages/images/plane.png";
import SearchIcon from "@mui/icons-material/Search"
import { v4 as uuidv4 } from "uuid"
import { useSearchParams } from "react-router-dom"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import {
  Divider,
  InputAdornment,
  Select,
  TextField
} from "@mui/material"
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";
import { FilterListOutlined } from "@mui/icons-material"
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
} from "./styles/Products"

const ListMenu = [
  { id: 1, title: "All", name: "" },
  { id: 2, title: "Liquid Detergent", name: "detergent" },
  { id: 3, title: "Hand Wash", name: "handWash" },
  { id: 4, title: "Floor Cleaner", name: "floorCleaner" },
  { id: 6, title: "Dish Washer", name: "dishWasher" },
  { id: 7, title: "Toilet Cleaner", name: "toiletCleaner" },
  { id: 7, title: "Glass Cleaner", name: "colin" }
]

const Products = () => {
  const [productImageData, setProductImageData] = useState(popularProducts)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [selected, setSelected] = useState("All")
  const [priceSelect, setPriceSelect] = useState("default")
  const [search, setSearch] = useState("")

  useEffect(() => {
    window?.scrollTo(0, 0)
  }, [])

  const [serachParam] = useSearchParams()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const filterData = (name = "", title) => {
    if (name) {
      setSearch("")
      const filterData = popularProducts.filter(({ type }) => type === name)
      setProductImageData(filterData)
    } else {
      setProductImageData(popularProducts)
    }
    setSelected(title)
    handleClose()
  }
  useEffect(() => {
    const param = serachParam.get("name")
    const paramTitle = serachParam.get("title")

    if (param) {
      filterData(param)
      setSelected(paramTitle)
    }
  }, [serachParam])

  const sortCallBack = (first, second) => {
    if (priceSelect === "priceLowToHigh") {
      return first?.price - second?.price
    } else if (priceSelect === "priceHighToLow") {
      return second?.price - first?.price
    }
  }

  useEffect(() => {
    if (search) {
      setSelected("All")
      const filterBySearch = popularProducts.filter((item) =>
        item.title.toLowerCase().includes(search?.toLowerCase() || "")
      )
      setProductImageData(filterBySearch)
    }
  }, [search])
  const items = productImageData
    .slice()
    .sort(sortCallBack)
    .map((product) => (
      <ProductImageWrapper key={uuidv4()}>
        <Product {...product} key={uuidv4()} />
      </ProductImageWrapper>
    ))
  return (
    <>
      <Wrapper>
        <Heading>Our Products Range</Heading>
      </Wrapper>
      <ProductHeader>
        <ProductHeaderContainer>
          <ProductHeaderContent>
            <ProductHeaderCount>
              Browse Products ({productImageData?.length})
            </ProductHeaderCount>
            <ProductHeaderLeft>
              <ProductHeaderLeftContent>
                <HeaderLeftSelect>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={priceSelect}
                    onChange={(event) => setPriceSelect(event.target.value)}
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
                    value={search}
                    InputProps={{
                      style: { height: "2rem" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </HeaderLeftSearch>
              </ProductHeaderLeftContent>
            </ProductHeaderLeft>
          </ProductHeaderContent>
        </ProductHeaderContainer>
      </ProductHeader>
      <Container>
        <ProductsWrapper>
          <ProductMenuList >
            <>
              <ProductMenu title="category">
                Category <Divider style={{ marginTop: "1rem" }} />
              </ProductMenu>
            </>
            {ListMenu.map(({ id, title, name }) => (
              <ProductMenu
                selected={selected === title}
                key={id}
                onClick={() => filterData(name, title)}
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
              onClick={handleClick}
            >
              {selected}
            </CustomButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              color="inherit"
              open={Boolean(anchorEl)}
              onClose={handleClose}
              variant={"selectedMenu"}
            >
              {ListMenu.map(({ id, title, name }) => (
                <>
                  {id !== 1 && <Divider />}
                  <MenuItem
                    key={id}
                    // style={{
                    //   fontFamily: "Roboto",
                    //   fontSize: "28px",
                    //   fontWeight: "400",
                    // }}
                    selected={selected === title}
                    onClick={() => filterData(name, title)}
                  >
                    {title}
                  </MenuItem>
                </>
              ))}
            </Menu>
          </ProductMenuListMobile>
          <ProductImageContainer >
            {items}
          </ProductImageContainer>
        </ProductsWrapper>
      </Container>
    </>
  )
}

export default Products
