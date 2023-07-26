import React, { useState } from "react";
import { Link } from "react-router-dom";
import WomenData from "../Data/Product.json";
import "../CSS/Mens.css";

const WomenFashionSection = ({ isFemale }) => {
  const [womenFashion] = useState(
    WomenData.filter((product) => product.gender === "Female").slice(0, 4)
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isFemale) {
    return null; // Return null if the gender is not male
  }

  // Array containing the two banner image URLs
  const bannerImages = ["../IMG/WomenBanner.png", "../IMG/WomenBanner2.jpg"];

  // Get a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * bannerImages.length);
  const randomBannerImage = bannerImages[randomIndex];

  return (
    <section className='fashion-section'>
      <div className='banner'>
        <img
          src={randomBannerImage}
          alt="Women's Fashion Banner"
          className='bannerimage'
        />
        <Link to='/womensection' className='shoppingbutton'>
          Shop Now
        </Link>
      </div>
      <div className='headers'>
        <h2>Women's Fashion</h2>
        <Link to='/products' className='morelink'>
          More
        </Link>
      </div>
      <div className='productcontainer'>
        {womenFashion.map((product) => (
          <div key={product.id} className='productcard'>
            <Link to='/womensection'>
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

export default WomenFashionSection;
