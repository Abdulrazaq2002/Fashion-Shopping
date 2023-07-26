import React from "react";
import "../CSS/ContactSection.css"; // Create a CSS file for the ContactSection component

const ContactSection = () => {
  return (
    <div className='div'>
      <hr />
      <div className='contact-section'>
        <h2>Contact Us</h2>
        <form>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <textarea placeholder='Your Message'></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
      <div className='section-two'>
        <div className='sell-with-us-section'>
          <h2>Sell With Us</h2>
          <p>
            Interested in selling your products with us? Contact us for
            partnership opportunities.
          </p>
        </div>
        <div className='partner-section'>
          <h2>Partner</h2>
          <p>
            We are open to partnering with other businesses. Let's grow
            together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
