import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBoxWrapper,
  FieldStyles,
  SearchDetailWrapper,
  SearchClose,
  CardContainer,
  EmptyStateWrapper
} from "./styles";
import useContextBlur from "@/hooks/custom/useContextBlur";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import propTypes from "prop-types";

const SearchBox = ({ closeModal }) => {
  const products = useSelector(state => state.product.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const cardRef = useRef(null);
  useContextBlur(cardRef, closeModal);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <SearchDetailWrapper ref={cardRef}>
      <SearchBoxWrapper>
        <SearchClose>
          <SearchIcon />
        </SearchClose>
        <FieldStyles
          type="text"
          placeholder="Search for products"
          onChange={handleChange}
        />
        <SearchClose onClick={closeModal}>
          <CloseIcon
            sx={{
              cursor: "pointer",
              fontSize: "1.5em",
              width: "fit-content"
            }}
          />
        </SearchClose>
      </SearchBoxWrapper>

      {searchTerm && searchResults.length > 0 ? (
        <CardContainer>
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} closeModal={closeModal} />
          ))}
        </CardContainer>
      ) : (
        searchTerm && (
          <EmptyStateWrapper>
            <img
              src="https://jkblobstore.blob.core.windows.net/jk-images-new/emptyState.webp"
              alt="Empty State"
            />
            <p>No products found!</p>
            <p>Try searching for something else.</p>
          </EmptyStateWrapper>
        )
      )}

      {searchResults.length === 0 && !searchTerm && (
        <CardContainer>
          <p>Top Suggestions</p>
          <p style={{ height: "1px !important" }} />
          {products.map(
            (product) =>
              product.isPopular && (
                <ProductCard key={product.id} product={product} closeModal={closeModal} />
              )
          )}
        </CardContainer>
      )}
    </SearchDetailWrapper>
  );
};

SearchBox.propTypes = {
  closeModal: propTypes.func
};

export default SearchBox;
