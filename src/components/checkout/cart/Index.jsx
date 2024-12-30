import { Add, Remove } from "@mui/icons-material";
import { Fragment, useEffect, useState } from "react";
import addToCart from "@/assets/images/addToCart.png";
import { Link } from "react-router-dom";
import { IconButton, Typography, Button } from "@mui/material";
import BottomNav from "@/components/common/navigation/Bottom";
import { Helmet } from "react-helmet-async";
import { truncateDescription } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { resetStepper } from "@/store/slices/stepperSlice";
import { removeFromCart, removeExisting, addExisting } from "@/store/slices/cartSlice";
import {
  Container,
  Checkbox,
  Wrapper,
  Title,
  Top,
  TopButton,
  Bottom,
  Info,
  CartImageContainer,
  CartImage,
  SelectAllContainer,
  CheckboxesWrapper,
  Product,
  CloseIcon,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  ProductPrice2,
  Hr
} from "./styles";

const Cart = () => {
  const [selectAll, setSelectAll] = useState(false);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch()

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

  const handleClick = (type, item) => {
    if (type === "dec") {
      dispatch(removeExisting({ item }));
    } else {
      dispatch(addExisting({ item }));
    }
  };

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ productId: id, size }));
    if (cartData.length === 0) {
      setCheckedItems({});
      setSelectAll(false);
      resetStepper();
    }
  };

  const handleRemoveAll = () => {
    Object.keys(checkedItems).forEach((key) => {
      if (checkedItems[key]) {
        const [productId, size] = key.split("-");
        dispatch(removeFromCart({ productId, size }));
      }
    });
    setCheckedItems({});
    setSelectAll(false);
    resetStepper();
  };

  console.log(cartData, "cartData", checkedItems, checkedItems.length);
  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
        <link rel="canonical" href="/cart" />
      </Helmet>
      <Container>
        <Wrapper>
          {cartData?.length === 0 || cartData.length === 0 ? (
            <Link to="/">
              <Title>Click Here to Add Products</Title>
            </Link>
          ) : (
            null
          )}
          {cartData?.length === 0 || cartData.length === 0 ? (
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
                    {cartData?.map((item) => {
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
                                <Remove onClick={() => handleClick("dec", item)} />
                              </IconButton>
                              <ProductAmount>{item?.quantity}</ProductAmount>
                              <IconButton>
                                <Add onClick={() => handleClick("add", item)} />
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
