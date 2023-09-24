import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="itemm">
                  <h1>Categories</h1> 
                  <span>Women</span> 
                  <span>Men</span>
                  <span>Shoes</span>
                  <span>Accessories</span>
                  <span>New Arrivals</span>
                </div>
                <div className="itemm">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="itemi">
                    <h1>About</h1>
                    <span className="Contact">Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Ad, soluta ratione quas 
                         autem sequi debitis libero hic eos minus itaque sed excepturi similique laboriosam pariatur
                         quibusdam, provident cum eveniet molestiae!
                    </span>
                </div>
                <div className="itemi">
                <h1>Contact</h1>
                    <span className="Contact">
                        Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Ad, soluta ratione quas 
                         autem sequi debitis libero hic eos minus itaque sed excepturi similique laboriosam pariatur
                         quibusdam, provident cum eveniet molestiae!
                    </span>
                </div>
            </div>
            <div className="bot">
                <div className="left">
                    
                    <span className="logoo"> <img src="/img1/law.jpg" alt="" />Libertad</span>
                    <span className="copyright">@ Copyright 2023. All Rights Reserved</span>
                </div>
                <div className="rightt">
               <img  src="/img1/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer