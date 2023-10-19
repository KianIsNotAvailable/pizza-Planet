import './footer.css';
import React from "react";
import AlienFooter from '../assets/aliens.jpeg';
export const Footer = () => {
    return ( 
    <div className="footer">
      <h1>Stores Near Me | Terms of Use | Terms and Conditions | Privacy Policy | Marketing Preferences | Cookie Policy | Copyright and Legal |Boring Legal Stuff
© 2023 Pizza Planet Limited </h1>
        <img src={AlienFooter}/>
        
    </div>
  );
};