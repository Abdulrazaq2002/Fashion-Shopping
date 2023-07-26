import React from "react";
import { Link } from "react-router-dom"; // Import Link

import "../CSS/Results.css";

const SearchResult = ({ searchResults }) => {
  return (
    <>
      <h1>Search Results</h1>
      <div className='search-results-containers'>
        {searchResults.map((product) => (
          <div key={product.id} className='product-cards'>
            <h3>{product.name2}</h3>
            <Link to={`/details/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className='product-images'
              />
            </Link>
            <p className='brands'>Brand: {product.brand}</p>
            <p className='prices'>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
