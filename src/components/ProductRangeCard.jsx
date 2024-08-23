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
} from "./styles/ProductRangeCard";
// import { useUserAuth } from "../context/UserAuthContext";
import { useCreateCart } from "../hooks/useCart";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const ProductRangeCard = ({
  name,
  id,
  size,
  price,
  images,
  inStock,
  averageRating = 0,
  ratingCount = 0,
  discountPercentage = 5
}) => {
  // const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  // const userAuth = useUserAuth();
  const { user } = useUserContext();
  const { mutate: createCart } = useCreateCart();

  const handleClick = () => {
    const productObject = {
      userId: user?.uid,
      Products: [
        {
          productID: id,
          quantity: 1,
          unitPrice: price,
          size
        }
      ]
    };

    createCart({ cartDetails: productObject, userID: user?.uid, setOpenAlert });
  };

  return (
    <WrapperContainer>
      <Link to={`/product/${id}`}>
        <Container>
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
      </Link>
    </WrapperContainer>
  );
};

export default ProductRangeCard;
