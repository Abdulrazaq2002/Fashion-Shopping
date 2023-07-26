import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./JS/Nav";
import Home from "./JS/Home";
import Products from "./JS/Product";
import ProductDetailsPage from "./JS/Details";
import CartPage from "./JS/Cart";
import SearchResults from "./JS/SearchBar";
import About from "./JS/About";
import Mens from "./JS/Mensection";
import Womens from "./JS/Womensection";
// import SearchResultsPage from "./JS/SearchResult";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='/products' element={<Products addToCart={addToCart} />} />
        <Route
          path='/details/:id'
          element={<ProductDetailsPage addToCart={addToCart} cart={cart} />}
        />
        <Route path='/cart' element={<CartPage cart={cart} />} />{" "}
        <Route path='/search' element={<SearchResults />} />
        <Route path='/about' element={<About />} />
        <Route path='/mensection' element={<Mens />} />
        <Route path='/womensection' element={<Womens />} />
        {/* <Route path='/search-results' element={<SearchResultsPage />} /> */}
        {/* Pass the cart prop to the CartPage component */}
      </Routes>
    </Router>
  );
};

export default App;
