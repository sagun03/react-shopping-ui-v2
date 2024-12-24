import React from "react";
import {
  CardWrapper,
  CardImage,
  CardContent,
  CardRating,
  StarIcon,
  CardImageContainer
} from "./styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product, closeModal }) => {
  console.log("product", product);
  const imageBlob = product.sizes[0].images[0];
  const price = product.sizes[0].price;
  const shortDescription = product.sizes[0].subTitle || product.description.substring(0, 50);
  const pathName = `/product/${product.id}`;
  return (
    <Link
      to={pathName}
      onClick={() => {
        localStorage.setItem("size", product?.sizes[0]?.size);
        closeModal();
      }}
    >
      <CardWrapper>
        <CardImageContainer>
          <CardImage src={imageBlob} alt={product.name} />
        </CardImageContainer>
        <CardContent>
          <p
            style={{
              fontWeight: 700
            }}
          >
            {product.name}
          </p>
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
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.string,
        subTitle: PropTypes.string,
        size: PropTypes.string
      })
    ),
    description: PropTypes.string,
    averageRating: PropTypes.number
  }),
  closeModal: PropTypes.func
};

export default ProductCard;
