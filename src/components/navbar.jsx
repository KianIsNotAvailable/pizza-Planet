import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import './navbar.css';
import PizzaLogo from '../assets/logo2.png';
export const Navbar = () => {
    return ( 
    <div className="navbar">
        <div className="logo">
            <img src={PizzaLogo}/>
        </div>
        <div className="links">
            <Link to="/pizza-Planet"> Shop </Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  );
};