/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
// src/components/SimilarProducts.jsx

import React, { useEffect, useState } from 'react';
import { fetchSimilarProducts } from '../api/ProductAPI'; // Adjust the import path based on your project structure
import ProductCard from './styles/ProductCard';
 // Adjust the import path based on your project structure

const SimilarProducts = ({ productId }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSimilarProducts = async () => {
      try {
        const products = await fetchSimilarProducts(productId);
        setSimilarProducts(products);
      } catch (err) {
        setError('Failed to load similar products.');
      } finally {
        setLoading(false);
      }
    };

    getSimilarProducts();
  }, [productId]);

  return (
    <div className="similar-products-section">
      <h2>Similar Products</h2>
      {loading ? (
        <p>Loading similar products...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="similar-products">
          {similarProducts.length > 0 ? (
            similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No similar products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
