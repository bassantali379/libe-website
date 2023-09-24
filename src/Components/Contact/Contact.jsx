import React from "react"; 
import "./Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Contact = () => {
    return(
        <div className="con">
            <div className="wra">
                <span className="spann">BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input className="in" type="text" placeholder="Enter your e-mail..." />
                    <button className="bo">JOIN US</button>
                </div>
                <div className="icons2">
                   <a href="https://www.facebook.com/profile.php?id=100076295014518"> <FacebookIcon/> </a>
                    <a href="https://www.instagram.com/libertad_world/"><InstagramIcon/></a>
                   <a href="https://twitter.com/i/flow/login"> <TwitterIcon/></a>
                    <a href="http://localhost:3000/"><GoogleIcon/></a>
                    <a href=""><PinterestIcon/></a>
                    
                </div>
            </div>
        </div>
    )
}
export default Contact