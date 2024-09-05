import { Add, Remove, Close } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { mobile, ScreenWith670px } from "../responsive";
import { Fragment, useEffect, useState } from "react";
import addToCart from "./images/addToCart.png";
import { Link } from "react-router-dom";
import { IconButton, Typography, Button } from "@mui/material";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";
import { useCartContext } from "../context/cartContext";
import { useUpdateCart, useDeleteCart, useDeleteProductCart } from "../hooks/useCart";
import { useUserContext } from "../context/UserContext";
import { useStepperContext } from "../context/StepperContext";
import { truncateDescription } from "../utils/helper";
const Container = styled.div``;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px; /* Space between checkbox and label */
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: #eee;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: teal; /* Color when checked */
    border-color: teal;
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 8px;
    height: 14px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const Wrapper = styled.div`
  padding: 0 2.5rem;
  margin-bottom: 5rem;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: whitesmoke;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative; /* Ensure relative positioning for child elements */
  ${mobile({ flexDirection: "column", gap: "2rem" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  ${ScreenWith670px({ flexDirection: "column" })};
  width:100%;
`;

const Info = styled.div`
  position: relative; /* Ensure relative positioning for child elements */;
  flex:2;
`;

const CartImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CartImage = styled.img`
  max-width: 100%;
`;

const SelectAllContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const CheckboxesWrapper = styled.div`
  display: flex;
  gap: 20px; // Adjust the spacing between checkboxes
  align-items: center;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  position: relative;
  background-color: #fff;
  margin-bottom: 1.5rem;
  border-radius: 8px;
`;

const CloseIcon = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #ff4d4d;
  &:hover {
    color: #ff1a1a;
  }
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 160px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductName = styled(Typography)`
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const ProductSize = styled(Typography)`
  font-size: 14px;
  color: #333;
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled(Typography)`
  font-size: 18px;
  font-weight: 800;
  color: #333;
`;

const ProductPrice2 = styled(Typography)`
  font-size: 16px;
  font-weight: 200;
  color: #777;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

const Cart = () => {
  const [selectAll, setSelectAll] = useState(false);
  const { user } = useUserContext()
  const { cartData } = useCartContext();
  const [data, setData] = useState({});
  const { activeStep } = useStepperContext()

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

  useEffect(() => {
    console.log(activeStep, "activeStepssss");
    console.log(checkedItems, "checkedItems")
  }, []);

  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
        <link rel="canonical" href="/cart" />
      </Helmet>
      <Container>
        <Announcement />
        <Wrapper>
          {data?.products?.length === 0 || data.length === 0 ? (
            <Link to="/">
              <Title>Click Here to Add Products</Title>
            </Link>
          ) : (
            null
          )}
          {data?.products?.length === 0 || data.length === 0 ? (
            <CartImageContainer>
              <CartImage src={addToCart} alt="add to cart" />
            </CartImageContainer>
          ) : (
            <>
              <Bottom>
                <Top>
                  <Link to="/products">
                    <TopButton>Continue Shopping</TopButton>
                  </Link>
                  <ProductSize>
                    <b>Shopping Bag ( {data?.totalQuantity} )</b>
                  </ProductSize>
                </Top>
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
                          disabled={checkedItems == null}
                        >
                          Remove Selected
                        </Button>
                      </SelectAllContainer>
                    </CheckboxesWrapper>
                    {data?.products?.map((item) => {
                      const itemId = item.productDetails?.id;
                      const itemSize = item?.productDetails?.sizes[0]?.size;
                      if (!itemId || !itemSize) return null; // Skip rendering if missing properties
                      const key = `${itemId}-${itemSize}`;
                      return (
                        <Product key={key}>
                          <CloseIcon onClick={() => handleRemoveItem(itemId, itemSize)} />
                          <Checkbox
                            checked={checkedItems[key] || false}
                            onChange={() => handleCheckboxChange(itemId, itemSize)}
                          />
                          <ProductDetail>
                            <Image
                              src={item?.productDetails?.sizes[0]?.images[0]}
                              alt={item?.productDetails?.name}
                            />
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
                                <b>Rs.</b> {((item?.productDetails?.sizes[0]?.price * item?.quantity) + 0.0).toFixed(2)}
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
                {/* <OrderSummary /> */}
              </Bottom>
            </>
          )}
        </Wrapper>
      </Container>
      <BottomNav />
    </>
  );
};

export default Cart;
