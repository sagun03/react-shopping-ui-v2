/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { InfoContainer, Image, Info, Title, Price, Price2, Button } from "./styles/PupularProductItem";

const PopularProductItem = (product) => {
  console.log("product name", product);
  const { name, sizes } = product;
  const defaultSize = sizes[0];
  const { price, images } = defaultSize;

  return (
    <>
      <InfoContainer>
        <Info>
          <Title>{name}</Title>
          {/* TODO: update when backend added subTitle */}
          {/* <Detail>{subTitle}</Detail> */}
        </Info>
        <Price>Rs. {price}</Price>
        <Price2>
          Rs. {price - price * 0.05}
        </Price2>
        <Link to={`/product/${product.id}`}>
          <Button>Shop Now</Button>
        </Link>
      </InfoContainer>
      <Image src={images[0]} />
    </>
  );
};

export default PopularProductItem;
