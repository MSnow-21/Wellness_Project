import React, {useState} from "react";
import { link } from "react-scroll";
import logo from "";

function Navbar() {

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
        <nav className = {nav ? "nav active" : "nav"}>
            <Link to = "#" className = "logo">
                <img src = {logo} alt = ""/>
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

    )
}

export default Navbar;