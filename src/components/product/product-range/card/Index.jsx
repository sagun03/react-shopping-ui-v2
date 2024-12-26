/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import Alert from "./Alert";
import {
  WrapperContainer,
  Container,
  Image,
  Info,
  Icon,
  ContentContainer,
  ProductName,
  ProductSize,
  PriceContainer,
  OriginalPrice,
  DiscountedPrice,
  CustomButton,
  OutOfStockLabel,
  BannerText,
  AddToCartIcon,
  RatingContainer,
  RatingText,
  SingleStar,
  DiscountText
} from "../../styles/ProductRangeCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../../../store/slices/cartSlice";

const ProductRangeCard = ({
  name,
  id,
  size,
  price,
  images,
  inStock,
  averageRating = 0,
  ratingCount = 0,
  discountPercentage = 5,
  description
}) => {
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartData);

  const handleClick = () => {
    const productObject = {
      productId: id,
      quantity: 1,
      unitPrice: price,
      size,
      name,
      image: images[0],
      description
    }
    // check if product is already in cart
    const productInCart = cart.find((item) => item.productId === productObject.productId && item.size === productObject.size);

    if (productInCart) {
      // if product is already in cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.productId === productObject.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      dispatch(updateCart(updatedCart));
    } else {
      dispatch(addToCart(productObject));
    }
  };

  const handleNavigate = () => {
    if (!inStock) return;
    localStorage.setItem("size", size);
    navigate(`/product/${id}`);
  };

  return (
    <WrapperContainer isOutOfStock={!inStock}>
        <Container onClick={handleNavigate} >
          {!inStock && (
            <OutOfStockLabel>
              <BannerText>OUT OF STOCK</BannerText>
            </OutOfStockLabel>
          )}
          <Image src={images[0]} isOutOfStock={!inStock} />
        </Container>
        <ContentContainer>
          <ProductName>
            {name} <ProductSize>({size})</ProductSize>
          </ProductName>
          <PriceContainer>
            <OriginalPrice>Rs. {price}</OriginalPrice>
            <DiscountedPrice>
              Rs. {price - price * (discountPercentage / 100)}
            </DiscountedPrice>
            <DiscountText>{discountPercentage}% OFF</DiscountText>
          </PriceContainer>
          <RatingContainer>
            <RatingText>
              {averageRating.toFixed(1)} <SingleStar>★</SingleStar>
            </RatingText>
            <RatingText>({ratingCount})</RatingText>
          </RatingContainer>
          <Info isOutOfStock={!inStock}>
            <CustomButton
              isOutOfStock={!inStock}
              disabled={!inStock}
              onClick={handleClick}
            >
              Add to Cart{" "}
              <Icon>
                <AddToCartIcon />
              </Icon>
            </CustomButton>
          </Info>
        </ContentContainer>

        {openAlert && (
          <Alert
            open={openAlert}
            type={"success"}
            message={"Your Product has been added to Cart"}
            setOpen={setOpenAlert}
          />
        )}
    </WrapperContainer>
  );
};

export default ProductRangeCard;
