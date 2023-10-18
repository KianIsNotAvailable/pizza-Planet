import './footer.css';
import React from "react";
import AlienFooter from '../assets/aliens.jpeg';
export const Footer = () => {
    return ( 
    <div className="footer">
        <img src={AlienFooter}/>
    </div>
  );
};