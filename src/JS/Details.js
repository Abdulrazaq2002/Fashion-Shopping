import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Data/Product.json";
import "../CSS/ProductDetailsPage.css";

const ProductDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  const showMessageAndReset = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // 3000ms = 3 seconds, adjust the delay as per your preference
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      alert("Please select a size.");
      return;
    }

    const productWithQuantity = { ...product, quantity, size: selectedSize };

    // Check if the product already exists in the cart
    const cartData = localStorage.getItem("cart");
    let cart = [];
    if (cartData) {
      cart = JSON.parse(cartData);
    }

    const existingProductIndex = cart.findIndex(
      (item) =>
        item.id === productWithQuantity.id &&
        item.size === productWithQuantity.size
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity instead of adding a new entry
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Product does not exist in the cart, add it to the cart
      cart.push(productWithQuantity);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show the message
    showMessageAndReset();
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className='product-details-card'>
      <div className='product-image'>
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className='active'
        />
        <div className='show-all-images'>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.name}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className='product-info'>
        <div className='product-details'>
          <h2 className='product-title'>{product.name}</h2>
          <p className='product-description'>{product.description}</p>
          <p className='product-price'>Price: ₹{product.price}</p>
          <p className='product-brand'>Brand: {product.brand}</p>
          <div className='product-size'>
            <p>Size:</p>
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-button ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeChange(size)}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className='quantity-info'>
          <button
            variant='outline-primary'
            className='quantity-button'
            onClick={handleDecreaseQuantity}>
            -
          </button>
          <p className='quantity-display'>{quantity}</p>
          <button
            variant='outline-primary'
            className='quantity-button'
            onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <button
          variant='primary'
          className='add-to-cart-button'
          onClick={handleAddToCart}>
          Add to Cart
        </button>
        {showMessage && (
          <div className='add-to-cart-message'>Item added to cart!</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
