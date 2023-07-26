import React from "react";
import "../CSS/BannerSection.css"; // Create a CSS file for the BannerSection component

const BannerSection = () => {
  const reasons = [
    {
      id: 1,
      title: "High-Quality Products",
      image: "../IMG/Quality.png", // Replace with the path to the image
    },
    {
      id: 2,
      title: "Fast & Free Shipping",
      image: "../IMG/FreeShipping.png.png", // Replace with the path to the image
    },
    {
      id: 3,
      title: "Excellent Customer Support",
      image: "../IMG/Contact.png", // Replace with the path to the image
    },
    // Add more reasons if needed
  ];

  return (
    <>
      <div className='banner-section'>
        <img
          src='../IMG/denimbanner.jpg' // Replace with the path to your banner image
          alt='Special Offer Banner'
        />
      </div>
      <div className='why-choose-us-section'>
        <h2>Why Choose Us</h2>
        <div className='reasons-container'>
          {reasons.map((reason) => (
            <div key={reason.id} className='reason'>
              <img src={reason.image} alt={reason.title} />
              <p>{reason.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerSection;
