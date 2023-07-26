import React, { useState } from "react";
import { Link } from "react-router-dom";
import menFashionData from "../Data/Product.json";
import "../CSS/Mens.css";

const MenFashionSection = ({ isMale }) => {
  const [menFashionProducts] = useState(
    menFashionData.filter((product) => product.gender === "Male").slice(0, 4)
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isMale) {
    return null; // Return null if the gender is not male
  }

  // Array containing the two banner image URLs
  const bannerImages = ["../IMG/MensBanner1.jpg", "../IMG/MensBanner2.jpg"];

  // Get a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * bannerImages.length);
  const randomBannerImage = bannerImages[randomIndex];

  return (
    <section className='fashion-section'>
      <div className='banner'>
        <img
          src={randomBannerImage}
          alt="Men's Fashion Banner"
          className='bannerimage'
        />
        <Link to='/mensection' className='shoppingbutton'>
          Shop Now
        </Link>
      </div>
      <div className='headers'>
        <h2>Men's Fashion</h2>
        <Link to='/products' className='morelink'>
          More
        </Link>
      </div>
      <div className='productcontainer'>
        {menFashionProducts.map((product) => (
          <div key={product.id} className='productcard'>
            <Link to='/mensection'>
              <img src={product.image} alt={product.name} />
            </Link>
            <h3>{product.brand}</h3>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default MenFashionSection;
