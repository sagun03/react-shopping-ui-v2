import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBoxWrapper,
  FieldStyles,
  SearchDetailWrapper,
  SearchClose
} from "./styles";
import { useDataContext } from "../../context/DataContext";
import propTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
}
ProductCard.propTypes = {
  product: propTypes.object
}

const SearchBox = ({ closeModal }) => {
  const { products } = useDataContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    console.log("searchTerm", searchTerm);
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    console.log("results", results);
  }, [searchTerm]);
  return (
    <SearchDetailWrapper>
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
      {searchResults.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SearchDetailWrapper>
  );
}

SearchBox.propTypes = {
  closeModal: propTypes.func
}

export default SearchBox;
