import React from "react";
import "./Contact.css";
 
const Contact = () => { 

  return ( 

    <div className="contact"> 

      <h2>Contact Us</h2> 

      <p>Need Help? Contact our Customer Service team. 1(800)768-4354</p> 

  

      {/* Contact form */} 

      <form className="contact-form"> 

        <label htmlFor="name" className="label"> 

          Your Name: 

        </label> 

        <input type="text" id="name" name="name" className="input-field" /> 

  

        <label htmlFor="email" className="label"> 

          Your Email: 

        </label> 

        <input type="email" id="email" name="email" className="input-field" /> 

  

        <label htmlFor="message" className="label"> 

          Your Message: 

        </label> 

        <textarea 

          id="message" 

          name="message" 

          rows="4" 

          className="input-field" 

        ></textarea> 

  

        <button type="submit" className="button"> 

          Submit 

        </button> 

      </form> 

    </div> 

  ); 

}; 

  

export default Contact; 