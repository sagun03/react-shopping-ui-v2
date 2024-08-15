/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { InfoContainer, Image, Info, Title, Price, Price2, Button, Detail } from "./styles/PupularProductItem";

const PopularProductItem = (product) => {
  const { productName, price, images, subTitle, productId } = product;

  return (
    <>
      <InfoContainer>
        <Info>
          <Title>{productName}</Title>
          <Detail>{subTitle}</Detail>
        </Info>
        <Price>Rs. {price}</Price>
        <Price2>
          Rs. {price - price * 0.05}
        </Price2>
        <Link to={`/product/${productId}`}>
          <Button>Shop Now</Button>
        </Link>
      </InfoContainer>
      <Image src={images[0]} />
    </>
  );
};

export default PopularProductItem;