import React, { useState, useEffect, useRef } from "react";
import jsonData from "../Data/Product.json";
import SearchResult from "./SearchResult";
import "../CSS/Search.css";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null); // Create a ref for the search input element

  const handleSearch = () => {
    const filteredResults = jsonData.filter((product) => {
      const matchedTags = product.tag.filter((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return matchedTags.length > 0;
    });

    setSearchResults(filteredResults);
  };

  useEffect(() => {
    // Trigger focus on the search input when the component mounts
    searchInputRef.current.focus();
  }, []);

  return (
    <div>
      <center>
        <div className='search-bar'>
          <input
            ref={searchInputRef} // Attach the ref to the input element
            type='text'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Search Denim Shirts...'
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {searchResults.length > 0 && (
          <SearchResult searchResults={searchResults} />
        )}
      </center>
    </div>
  );
};

export default ProductSearch;
