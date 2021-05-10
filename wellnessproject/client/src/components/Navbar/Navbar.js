import React, { useState } from "react";
import "./Navbar.css"
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import logo from "../../images/logo.png";
import { connect, useDispatch } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [nav, setnav] = useState (false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav (true);

        }else {
            setnav (false);
        }
        
    }

    const onLogout = event => {
        console.log("in onlogout");
        //localStorage.removeItem('jwtToken');
        dispatch(logoutUser());

        history.push('/');
        window.location.reload();
    }

    window.addEventListener ("scroll", changeBackground);

    return (
        <nav className = {nav ? "nav active" : "nav"}>
        
        <Link to = "#" className = "logo">
            <img src = {logo} alt = ''/>
        </Link>
        
        <input className = "menu-btn" type = "checkbox" id = "menu-btn"/>
        <label className = "menu-icon" htmlFor = "menu-btn">
            <span className = "nav-icon"></span>
        </label>

    <ul className = "menu" >
        <li><Link to = "/"> Home </Link></li>
        <li><Link to = "/nutrition"> Nutrition </Link></li>
        <li><Link to = "/fitness"> Fitness </Link></li>
        <li><Link to = "/journal"> Journal </Link></li>
        <li><Link to = "/contact"> Contact </Link></li>
        <button onClick={onLogout} className='nav-tab'>Log Out</button>
    </ul>

    </nav>

    )
}

export default Navbar;



    