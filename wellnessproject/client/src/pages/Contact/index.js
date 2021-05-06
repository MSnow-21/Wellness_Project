import React from "react";
import "./ContactStyle.scss"
import { BsFillEnvelopeFill, BsMap, BsPhone } from "react-icons/bs"




const Contact = () => {
    return (
        <>
            <h1>Contact Us</h1>
            <p> Lorem ipsum</p>

            <div id = "contact-container">
                <div className = "contact-info">
                    <h4>
                        Contact Information
                    </h4>
                    <p>Complete all fields and click Submit</p>


                    <div className = "icon-text">
                    <i class = "fas fa-phone">
                        <BsPhone className = "fa"/>
                    </i>
                        <span>216-224-3019</span>
                    </div>


                    <div className = "icon-text">
                    <i class="fas fa-envelope"></i>
                    <BsFillEnvelopeFill className = "fa" />
                        <span>ChrisCurryCodez@gmail.com</span>
                    </div>


                    <div className = "icon-text">
                    <i class="fas fa-map-pin"></i>
                    <BsMap className = "fa" />
                        <span>123 Somewhere, Ohio 44120</span>
                    </div>


                    <div className = "social-media">
                        <a href = "#" className = "icon-circle">
                            <i className = "icon"></i>
                        </a>
                    </div>
                    </div>
                <form>

                </form>
            </div>

        </>

        
        
    ) 

}

export default Contact;
