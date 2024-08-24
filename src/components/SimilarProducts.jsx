import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDataContext } from "../context/DataContext";
import {
  SimilarProductsWrapper,
  SimilarProductsHeading,
  SimilarProductsContainer
} from "./styles/SimilarProductsStyles";
import SimilarProductsSwiper from "./SimilarProductsSwiper";
import LoadingSwiper from "./LoadingSwiper";
import {
  flattenProductSizes,
  getOtherRelatedProducts,
  getSimilarProducts
} from "../utils/helper";

const SimilarProducts = ({ currentProduct }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [otherCategoryProducts, setOtherCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { products } = useDataContext();

  useEffect(() => {
    const fetchSimilarAndRelatedProducts = () => {
      try {
        if (!Array.isArray(products) || products.length === 0) {
          setError("No products available.");
          setLoading(false);
          return;
        }

        const similarProducts = getSimilarProducts(products, currentProduct);
        setSimilarProducts(flattenProductSizes(similarProducts));

        const relatedProducts = getOtherRelatedProducts(
          products,
          currentProduct
        );
        setOtherCategoryProducts(flattenProductSizes(relatedProducts));
      } catch (err) {
        console.error("Error processing products:", err);
        setError("Failed to process products.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchSimilarAndRelatedProducts();
  }, [products, currentProduct]);

  if (loading) {
    return (
      <SimilarProductsWrapper>
        <SimilarProductsHeading>
          Loading Similar Products and Related Products...
        </SimilarProductsHeading>
        <LoadingSwiper />
      </SimilarProductsWrapper>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <SimilarProductsWrapper>
      <SimilarProductsContainer>
        <SimilarProductsHeading>Similar Products</SimilarProductsHeading>
        <SimilarProductsSwiper products={similarProducts} type="similar" />
      </SimilarProductsContainer>
      {otherCategoryProducts.length > 0 && (
        <SimilarProductsContainer>
          <SimilarProductsHeading>
            Other Products You Might Like
          </SimilarProductsHeading>
          <SimilarProductsSwiper
            products={otherCategoryProducts}
            type="related"
          />
        </SimilarProductsContainer>
      )}
    </SimilarProductsWrapper>
  );
};

SimilarProducts.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

export default SimilarProducts;
