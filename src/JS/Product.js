import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../Data/Product.json";
import "../CSS/ProductPage.css"; // Import CSS file for styling

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");
  const [gender, setGender] = useState("all");
  const [showFilter, setShowFilter] = useState(false); // Track whether to show the filter section

  const product = products.find((product) => product.id === parseInt(id));
  const Back = "<";

  const filterProducts = () => {
    let filteredProducts = products;

    // Filter by category
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // Filter by price
    if (maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseInt(maxPrice)
      );
    }

    // Filter by gender
    if (gender !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender === gender
      );
    }

    return filteredProducts;
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleGenderChange = (newGender) => {
    setGender(newGender);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className='product-page-container'>
        <div className='filter-section'>
          <h3>Filter By:</h3>
          <div className='gender-filter'>
            <label>Gender:</label>
            <div className='gender-buttons'>
              <button
                className={gender === "all" ? "active" : ""}
                onClick={() => handleGenderChange("all")}>
                All
              </button>
              <button
                className={gender === "Male" ? "active" : ""}
                onClick={() => handleGenderChange("Male")}>
                Male
              </button>
              <button
                className={gender === "Female" ? "active" : ""}
                onClick={() => handleGenderChange("Female")}>
                Female
              </button>
            </div>
            <div className='filters'>
              <div className='category-filter'>
                <label>Category:</label>
                <div className='category-buttons'>
                  <button
                    className={category === "all" ? "active" : ""}
                    onClick={() => handleCategoryChange("all")}>
                    All
                  </button>
                  <button
                    className={category === "T-Shirt" ? "active" : ""}
                    onClick={() => handleCategoryChange("T-Shirt")}>
                    T-Shirts
                  </button>
                  <button
                    className={category === "Pants" ? "active" : ""}
                    onClick={() => handleCategoryChange("Pants")}>
                    Pants
                  </button>
                  <button
                    className={category === "Shirts" ? "active" : ""}
                    onClick={() => handleCategoryChange("Shirts")}>
                    Shirts
                  </button>
                  <button
                    className={category === "Hoodies" ? "active" : ""}
                    onClick={() => handleCategoryChange("Hoodies")}>
                    Hoodies/Jackets
                  </button>
                </div>
              </div>
            </div>
            <div className='price-filter'>
              <label htmlFor='price'>Max Price:</label>
              <input
                type='number'
                id='price'
                value={maxPrice}
                placeholder='Max-Price'
                onChange={handlePriceChange}
              />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='product-page'>
            {filterProducts().map((product) => (
              <Link to={`/details/${product.id}`} key={product.id}>
                <div className='product-container'>
                  <h4 className='product-name'>{product.name2}</h4>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='product-image'
                  />
                </div>
                <h3 className='product-price'>Price: ₹ {product.price}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
