import React, { useState } from "react";
import { Link } from "react-router-dom";
//import logo from "";

const Navbar = () => {

    const [nav, setnav] = useState (false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav (true);

        }else {
            setnav (false);
        }
        
    }

    window.addEventListener ("scroll", changeBackground);

    return (
       <nav>
           <Link to='/test1'>
               test1
           </Link>
           <Link to='/test2'>
               test2
           </Link>
       </nav> 
    )
}

export default Navbar;

/*
<nav className = {nav ? "nav active" : "nav"}>
            <Link to = "/test" className = "logo">
            test1
            </Link>
            <input className = "menu-btn" type= "checkbox" id = "menu-btn"/>
            <label className = "menu-icon" for = "menu-btn">
                <span className = "nav-icon"></span>
            </label>

        <ul className = "menu" >
            <li><link to = "#"> Home </link></li>
            <li><link to = "#"> Nutrition </link></li>
            <li><link to = "#"> Fitness </link></li>
            <li><link to = "#"> Contact </link></li>
        </ul>

        </nav>
    */