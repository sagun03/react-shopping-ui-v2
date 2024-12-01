import React from "react";
import {
  CardWrapper,
  CardImage,
  CardContent,
  CardRating,
  StarIcon,
  CardImageContainer
} from "./styles";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log("product", product);
  const imageBlob = product.sizes[0].images[0];
  const price = product.sizes[0].price;
  const shortDescription = product.sizes[0].subTitle || product.description.substring(0, 50);
  const pathName = `/product/${product.id}`;
  return (
    <Link to={pathName}>
      <CardWrapper>
        <CardImageContainer>
          <CardImage src={imageBlob} alt={product.name} />
        </CardImageContainer>
        <CardContent>
          <p style={{
            fontWeight: 700
          }}>{product.name}</p>
          <CardRating>
            <span>{product.averageRating}</span>
            <StarIcon />
          </CardRating>
          <p>{shortDescription}</p>
          <p>Rs.{price}</p>
        </CardContent>
      </CardWrapper>
    </Link>
  );
}

ProductCard.propTypes = {
  product: propTypes.object
}

export default ProductCard;
