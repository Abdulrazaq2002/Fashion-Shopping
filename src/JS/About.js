import React from "react";
import "../CSS/AboutSection.css"; // Create a CSS file for the AboutSection component

const AboutSection = () => {
  return (
    <div className='about-section'>
      <h2>About Us</h2>
      <p>
        Welcome to our fashion shopping website! We are a fashion store that
        offers a wide range of trendy and stylish clothing for men and women.
        Established in [year of establishment], we have been serving fashion
        enthusiasts with the latest and high-quality products.
      </p>
      <p>
        Our mission is to provide our customers with an exceptional shopping
        experience by offering the latest fashion trends, excellent customer
        service, and fast shipping. We believe that everyone deserves to look
        and feel their best, and we are here to help you achieve that with our
        curated collection of clothing and accessories.
      </p>
      <p>
        Whether you are looking for casual wear, formal attire, or something
        unique to express your personal style, our fashion store has something
        for everyone. We are committed to staying ahead of the fashion curve and
        bringing you the hottest styles from around the world.
      </p>
      <p>
        Thank you for choosing us as your fashion destination. We are excited to
        be a part of your style journey. Happy shopping!
      </p>
    </div>
  );
};

export default AboutSection;
