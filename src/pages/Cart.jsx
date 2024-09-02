import { Add, Remove, Close } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile, ScreenWith670px } from "../responsive";
import { Fragment, useEffect, useState } from "react";
import addToCart from "./images/addToCart.png";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import { IconButton, Typography, Button } from "@mui/material";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";
import { useCartContext } from "../context/cartContext";
import { useUpdateCart, useDeleteCart, useDeleteProductCart } from "../hooks/useCart";
import { useUserContext } from "../context/UserContext";
import {
  Bottom,
  CheckboxesWrapper,
  CloseIcon,
  Container,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductDetail,
  ProductName,
  ProductPrice,
  ProductPrice2,
  ProductSize,
  SelectAllContainer,
  Title,
  Top,
  TopButton,
  Wrapper,
  CartImageContainer,
  CartImage,
  Checkbox,
  Details
} from "../components/styles/Cart";
import { truncateDescription } from "../utils/helper";

const Cart = () => {
  const [selectAll, setSelectAll] = useState(false);
  const { user } = useUserContext()
  const { cartData } = useCartContext();
  const [data, setData] = useState({});

  const { mutate: updateCart } = useUpdateCart();
  const { mutate: deleteCart } = useDeleteCart();
  const { mutate: deleteProductCart } = useDeleteProductCart()
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    console.log(cartData, "cartData")
    if (cartData) {
      // setCartData(dataFetched);
      setData(cartData);
    }
  }, [cartData]);

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  const handleCheckboxChange = (itemId, itemSize) => {
    const key = `${itemId}-${itemSize}`;
    const newCheckedItems = {
      ...checkedItems,
      [key]: !checkedItems[key]
    };
    // Update selectAll if all items are selected
    const allItemsChecked = data.products.every((item) => {
      const itemId = item?.productDetails?.id;
      const itemSize = item?.productDetails?.sizes?.[0]?.size;
      return itemId && itemSize ? newCheckedItems[`${itemId}-${itemSize}`] : false;
    });

    setCheckedItems(newCheckedItems);
    setSelectAll(allItemsChecked);
  };

  // useEffect(() => {
  //   // Set all items as checked or unchecked based on selectAll state
  //   const newCheckedItems = data?.products?.reduce((acc, item) => {
  //     const itemId = item.productDetails?.id;
  //     const itemSize = item?.productDetails?.sizes[0]?.size;
  //     if (itemId && itemSize) {
  //       acc[`${itemId}-${itemSize}`] = selectAll;
  //     }
  //     return acc;
  //   }, {});
  //   setCheckedItems(newCheckedItems);
  // }, [selectAll, data.products]);

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    // Generate new checked items state based on selectAll
    const newCheckedItems = data.products.reduce((acc, item) => {
      const itemId = item.productDetails?.id;
      const itemSize = item?.productDetails?.sizes?.[0]?.size;
      if (itemId && itemSize) {
        acc[`${itemId}-${itemSize}`] = newSelectAll;
      }
      return acc;
    }, {});
    setSelectAll(newSelectAll);
    setCheckedItems(newCheckedItems);
  };

  const handleClick = (type, item, id = "") => {
    let sampleCartData;
    let singleNull = false
    if (type === "dec") {
      sampleCartData = {
        ...data,
        products: data.products
          .map(value => {
            console.log(value, "value")
            if (value?.productDetails?.id === id && value.quantity > 1 && value?.productDetails?.sizes[0]?.size === item?.productDetails?.sizes[0]?.size) {
              return { ...value, quantity: value.quantity - 1 };
            } else if (value?.productDetails?.id === id && value.quantity === 1 && value?.productDetails?.sizes[0].size === item?.productDetails?.sizes[0]?.size) {
              singleNull = !singleNull
              return null;
            }
            return value;
          })
          .filter(value => value !== null)
      };
    } else {
      sampleCartData = {
        ...data,
        products: data.products.map(value => {
          if (value?.productDetails?.id === id && value?.productDetails?.sizes[0]?.size === item?.productDetails?.sizes[0]?.size) {
            return { ...value, quantity: value.quantity + 1 };
          }
          return value;
        })
      };
    }
    if (singleNull) {
      deleteProductCart({ CartID: sampleCartData?.CartID, productId: id, userID: user?.uid, size: item?.productDetails?.sizes[0]?.size })
      singleNull = false
    } else {
      if (sampleCartData?.products?.length === 0) {
        deleteCart({ CartID: sampleCartData?.CartID, userID: user?.uid });
      } else {
        const createdObjectForCart = {
          userId: cartData?.userId,
          Products: sampleCartData.products.map(value => ({
            productID: value?.productDetails?.id,
            quantity: value.quantity,
            unitPrice: value?.productDetails?.sizes[0]?.price,
            size: value?.productDetails?.sizes[0]?.size
          }))
        };
        updateCart({ CartID: sampleCartData?.CartID, cartDetails: createdObjectForCart, userID: user?.uid });
      }
    }
  };

  const handleRemoveItem = (id, size) => {
    console.log("insisissisi")
    deleteProductCart({ CartID: data?.CartID, productId: id, userID: user?.uid, size })
  };
  const handleRemoveAll = () => {
    Object.keys(checkedItems).forEach((key) => {
      if (checkedItems[key]) {
        const [productId, size] = key.split("-");
        deleteProductCart({ CartID: data?.CartID, productId, userID: user?.uid, size });
      }
    });
    setCheckedItems({});
    setSelectAll(false);
  };

  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
        <link rel="canonical" href="/cart" />
      </Helmet>
      <Container>
        <Announcement />
        <NavBar />
        <Wrapper>
          {data?.products?.length === 0 || data.length === 0 ? (
            <Link to="/">
              <Title>Click Here to Add Products</Title>
            </Link>
          ) : (
            <Title>Your Bag</Title>
          )}
          {data?.products?.length === 0 || data.length === 0 ? (
            <CartImageContainer>
              <CartImage src={addToCart} alt="add to cart" />
            </CartImageContainer>
          ) : (
            <>
              <Top>
                <Link to="/products">
                  <TopButton>Continue Shopping</TopButton>
                </Link>
              </Top>
              <Bottom>
                <Info>
                  <Fragment>
                    <CheckboxesWrapper>
                      <SelectAllContainer>
                        <Checkbox
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                        />
                        <Typography>Select All</Typography>
                      </SelectAllContainer>
                      <SelectAllContainer>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={handleRemoveAll}
                        >
                          Remove Selected
                        </Button>
                      </SelectAllContainer>
                    </CheckboxesWrapper>
                    {data?.products?.map((item) => {
                      const itemId = item.productDetails?.id;
                      const itemSize = item?.productDetails?.sizes[0]?.size;
                      if (!itemId || !itemSize) {
                        return null; // Skip rendering this item if necessary properties are missing
                      }
                      const key = `${itemId}-${itemSize}`;
                      return (
                        <Product key={key}>
                          <CloseIcon onClick={() => handleRemoveItem(itemId, itemSize)} />
                          <Checkbox
                            checked={checkedItems[key] || false}
                            onChange={() => handleCheckboxChange(itemId, itemSize)}
                          />
                          <ProductDetail>
                            <Image src={item?.productDetails?.sizes[0]?.images[0]} alt={item?.productDetails?.name} />
                            <Details>
                              <ProductName>
                                <b>Product:</b> {item?.productDetails?.name}
                              </ProductName>
                              <ProductSize>
                                <b>Description:</b> {truncateDescription(item?.productDetails?.description, 100)}
                              </ProductSize>
                              <ProductSize>
                                <b>Size:</b> {item?.productDetails?.sizes?.[0]?.size}
                              </ProductSize>
                              <ProductPrice>
                                <b>Rs.</b> {item?.productDetails?.sizes[0]?.price * item?.quantity}
                              </ProductPrice>
                              <ProductPrice2>
                                <b> Rs.</b> {((item?.productDetails?.sizes[0]?.price * item?.quantity) + 0.0).toFixed(2)}
                              </ProductPrice2>
                            </Details>
                          </ProductDetail>
                          <PriceDetail>
                            <ProductAmountContainer>
                              <IconButton>
                                <Remove onClick={() => handleClick("dec", item, itemId)} />
                              </IconButton>
                              <ProductAmount>{item?.quantity}</ProductAmount>
                              <IconButton>
                                <Add onClick={() => handleClick("add", item, itemId)} />
                              </IconButton>
                            </ProductAmountContainer>
                          </PriceDetail>
                          <Hr />
                        </Product>
                      );
                    })}

                  </Fragment>
                </Info>
                <OrderSummary />
              </Bottom>
            </>
          )}
        </Wrapper>
        <Footer />
      </Container>
      <BottomNav />
    </>
  );
};

export default Cart;
