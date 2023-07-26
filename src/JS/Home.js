import React, { useState } from "react";
import "../CSS/Home.css";
import MenFashionSection from "../JS/Mens";
import WomenFashionPage from "../JS/Women";
import Banner from "../JS/Banner";
import Footer from "../JS/Contact";
const HomePage = () => {
  const isMale = true;
  const isFemale = true;

  const [showMenSection, setShowMenSection] = useState(false);
  const [showWomenSection, setShowWomenSection] = useState(false);

  const handleMenClick = () => {
    setShowMenSection(true);
    setShowWomenSection(false);
  };

  const handleWomenClick = () => {
    setShowMenSection(false);
    setShowWomenSection(true);
  };

  return (
    <div className='home-page'>
      <header className='nav-section'>
        <button
          className={showMenSection ? "active" : ""}
          onClick={handleMenClick}>
          Men
        </button>
        <button
          className={showWomenSection ? "active" : ""}
          onClick={handleWomenClick}>
          Women
        </button>
      </header>

      <main className='main-content'>
        {/* Conditional rendering of the fashion sections */}
        {showMenSection && <MenFashionSection isMale={isMale} />}
        {showWomenSection && <WomenFashionPage isFemale={isFemale} />}
      </main>
      <Banner />
      <Footer />
    </div>
  );
};

export default HomePage;
