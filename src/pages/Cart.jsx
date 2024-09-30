import { Add, Remove, Close } from "@mui/icons-material";
import styled from "styled-components";
import { mobile, ScreenWith670px } from "../responsive";
import { Fragment, useEffect, useState } from "react";
import addToCart from "./images/addToCart.png";
import { Link } from "react-router-dom";
import { IconButton, Typography, Button } from "@mui/material";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";
import { useUserContext } from "../context/UserContext";
import { useStepperContext } from "../context/StepperContext";
import { truncateDescription } from "../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, decreaseQuantity, removeProducts } from "../redux/cartRedux";

const Container = styled.div``;
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: #eee;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  border: 2px solid #ccc;

  &:checked {
    background-color: red;
    border-color: red;
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 30%;
    width: 8px;
    height: 14px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);
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
  // const { cartData } = useCartContext();
  const { activeStep } = useStepperContext()
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  // const { mutate: updateCart } = useUpdateCart();
  // const { mutate: deleteCart } = useDeleteCart();
  // const { mutate: deleteProductCart } = useDeleteProductCart()
  const [checkedItems, setCheckedItems] = useState({});

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
    const allItemsChecked = cartData.products.every((item) => {
      const key = `${item.productId}-${item.size}`;
      return newCheckedItems[key];
    });

    setCheckedItems(newCheckedItems);
    setSelectAll(allItemsChecked);
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    const newCheckedItems = cartData.products.reduce((acc, item) => {
      const key = `${item.productId}-${item.size}`;
      acc[key] = newSelectAll;
      return acc;
    }, {});

    setCheckedItems(newCheckedItems);
    setSelectAll(newSelectAll);
  };

  const handleClick = (type, item, id = "") => {
    if (type === "dec") {
      dispatch(decreaseQuantity({ productId: id, size: item?.size, quantity: 1, unitPrice: item?.unitPrice }));
    } else {
      dispatch(addProducts({ productId: id, size: item?.size, quantity: 1, unitPrice: item?.unitPrice }));
    }
  };

  const handleRemoveItem = (id, size) => {
    dispatch(removeProducts({ productId: id, size }));
  };

  const handleRemoveAll = () => {
    Object.keys(checkedItems).forEach((key) => {
      if (checkedItems[key]) {
        const [productId, size] = key.split("-");
        dispatch(removeProducts({ productId, size }));
      }
    });
    setCheckedItems({});
    setSelectAll(false);
  };

  useEffect(() => {
    console.log(activeStep, "activeStepssss");
    console.log(checkedItems, "checkedItems")
  }, []);

  console.log(cartData, "cartData", checkedItems, checkedItems.length);
  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
        <link rel="canonical" href="/cart" />
      </Helmet>
      <Container>
        <Wrapper>
          {cartData?.products?.length === 0 || cartData.length === 0 ? (
            <Link to="/">
              <Title>Click Here to Add Products</Title>
            </Link>
          ) : (
            null
          )}
          {cartData?.products?.length === 0 || cartData.length === 0 ? (
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
                    <b>Shopping Bag ( {cartData?.quantity} )</b>
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
                          disabled={Object.values(checkedItems).every((value) => !value)}
                        >
                          Remove Selected
                        </Button>
                      </SelectAllContainer>
                    </CheckboxesWrapper>
                    {cartData?.products?.map((item) => {
                      const itemId = item.productId;
                      const itemSize = item?.size;
                      if (!itemId || !itemSize) return null;
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
                              src={item?.image}
                              alt={item?.name}
                            />
                            <Details>
                              <ProductName>
                                <b>Product:</b> {item?.name}
                              </ProductName>
                              <ProductSize>
                                <b>Description:</b> {truncateDescription(item?.description || "", 100)}
                              </ProductSize>
                              <ProductSize>
                                <b>Size:</b> {item?.size}
                              </ProductSize>
                              <ProductPrice>
                                <b>Rs.</b> {item?.unitPrice * item?.quantity}
                              </ProductPrice>
                              <ProductPrice2>
                                <b>Rs.</b> {((item?.unitPrice * item?.quantity) + 0.0).toFixed(2)}
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
