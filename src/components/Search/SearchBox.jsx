import React, { useState, useEffect, useRef, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBoxWrapper,
  FieldStyles,
  SearchDetailWrapper,
  SearchClose,
  CardContainer
} from "./styles";
import { useDataContext } from "../../context/DataContext";
import useContextBlur from "../../hooks/custom hooks/useContextBlur";
import ProductCard from "./ProductCard";
import propTypes from "prop-types";

const SearchBox = ({ closeModal }) => {
  const { products } = useDataContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const cardRef = useRef(null);
  useContextBlur(cardRef, closeModal);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    console.log("searchTerm", searchTerm);
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    console.log("results", results);
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
          <CloseIcon sx={
            {
              cursor: "pointer",
              fontSize: "1.5em",
              width: "fit-content"
            }
          }/>
        </SearchClose>
      </SearchBoxWrapper>
      {
        searchTerm && <CardContainer>
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardContainer>
      }
      {
        searchResults.length === 0 &&
        <CardContainer>
          <p>Top Suggestions</p>
          {products.map(product => (
            product.isPopular &&
            <ProductCard key={product.id} product={product} />
          ))}
        </CardContainer>
      }
    </SearchDetailWrapper>
  );
}

SearchBox.propTypes = {
  closeModal: propTypes.func
}

export default SearchBox;
