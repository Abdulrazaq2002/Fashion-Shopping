import React, { useState } from "react";
import { Link } from "react-router-dom";
import menFashionData from "../Data/Product.json";
import "../CSS/Mens.css";

const MenFashionSection = ({ isMale }) => {
  const [menFashionProducts] = useState(
    menFashionData.filter((product) => product.gender === "Female")
  );

  return (
    <>
      <h1>Womens Products</h1>
      <section className='fashion-section'>
        <div className='productcontainer'>
          {menFashionProducts.map((product) => (
            <div key={product.id} className='productcard'>
              <Link to={`/details/${product.id}`} key={product.id}>
                <img src={product.image} alt={product.name} />
              </Link>
              <h3>{product.brand}</h3>
              <h3> Price: ₹ {product.price}</h3>
            </div>
          ))}
        </div>
        <hr />
      </section>
    </>
  );
};

export default MenFashionSection;
