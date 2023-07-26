import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/CartPage.css";

const CartPage = ({ removeFromCart }) => {
  const [cart, setCart] = useState([]);
  const Back = "<";

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className='cart-page' id='cart-page'>
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <div className='shopping' id='shopping-section'>
            <h2>Continue Shopping</h2>
            <Link to='/products' id='shop-link'>
              Go And Shop
            </Link>
          </div>
        </>
      ) : (
        <>
          <ul className='cart-items' id='cart-items-list'>
            {cart.map((product) => (
              <li
                key={product.id}
                className='cart-item'
                id={`cart-item-${product.id}`}>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>Price: ₹{product.price}</p>
                <p>Size: {product.size}</p> {/* Display the selected size */}
                <p>Total Price: ₹{product.price * product.quantity}</p>
                <button
                  onClick={() => handleRemove(product.id)}
                  className='remove-button'>
                  Remove from Cart
                </button>
                <div className='quantity-buttons'>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className='increase-button'>
                    +
                  </button>
                  <p className='quantity'>Quantity: {product.quantity}</p>
                  <button
                    onClick={() => handleDecreaseQuantity(product.id)}
                    className='decrease-button'>
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className='buy-button' id='buy-button'>
            BUY
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
