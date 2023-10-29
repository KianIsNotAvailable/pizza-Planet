import './footer.css';
import React from "react";
import AlienFooter from '../assets/aliens.jpeg';
export const Footer = () => {
    return ( 
    <div className="footer">
      <img id='alien' src={AlienFooter}/>
      <h1 className='copyright'>Stores Near Me | Terms of Use | Terms and Conditions | Privacy Policy | Marketing Preferences | Cookie Policy | Copyright and Legal |Boring Legal Stuff
© 2023 Pizza Planet Limited </h1>
        
        
    </div>
  );
};