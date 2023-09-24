import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import "./Navbar.css"
import Cart from "../Cart/Cart";
import Search from "../Search/Search";





const Navbar = () => {
  const [opan,setOpan] = useState(false)
  const [open,setOpen] = useState(false)
    return (
        <div className="navbar">
             <div className="wrapper">
          <div className="left">
            <div className="iteme">
             <img src="/img/download.png" alt="" />
              <KeyboardArrowDownIcon/>
              <div>

      <select className="itemew" name="selectedFruit">
        <option className="current" > USD</option>
        <option className="current" >EURD</option>
        <option className="current" >GBP</option>
        <option className="current" >IDR</option>
      </select>
   
    </div>
    </div>

   
    <div className="itema">
      <Link className="link" to="/products/1">Women</Link>
    </div>
    <div className="itema">
      <Link className="link"  to="/products/2">Man</Link>
    </div>
    <div className="itema">
      <Link  className="link" to="/products/3">Kids</Link>
    </div>
              </div> 
          
          <div className="center1">
             <img src="/img/law.jpg" alt="" />
            <Link className="link" to="/">Libertad</Link>
            </div> 
          <div className="right">
          <div className="itema">
            <Link className="link" to="/">Homepage</Link>
            </div> 
            <div className="itema">
            <Link className="link" to="/" >About</Link>
            </div> 
            <div className="itema">
            <Link className="link" to="/" >Contact</Link>
            </div> 
            <div className="itema">
            <Link className="link" to="/stores/1">Stores</Link>
            </div>
            <div className="icons" >
              <div className="search-formm" onClick={()=>setOpan(!opan)}>
              <SearchIcon/>
              
              </div>
              <div> 
              <Link className="QPO" to="/loginform/2"> <PersonOutlineIcon /></Link>
               
              </div>
            
             <FavoriteBorderIcon/>
             <div className="cartICon" onClick={()=>setOpen(!open)}>
             
             <ShoppingCartOutlinedIcon/>
            
             <span>0</span>
             </div>
              </div> 
            </div> 
        </div>
        
        {open && <Cart/>}
        {opan && <Search/>}

        </div> 
        
    )
}

export default Navbar