import React from "react";
import "./Cards.css"
import { Link } from "react-router-dom";
const Cards = ({item}) =>{
return(
 <Link className="link" to = {`/products2/${item.id}`}>
 <div className="cards">
    <div className="image">
    <div className="img">
       {item.isNew && <span id="an">New Season</span>}
       <img   src={item.imges} alt="" className="mainImg"/>
       <img src={item.imges2} alt="" className="secondImg"/>
       </div>
       <div className="img">
       {item.isNew && <span id="an">New Season</span>}
       <img  src={item.imgess} alt="" className="mainImg"/>
       <img src={item.imgess2} alt="" className="secondImg"/>
       </div>
       </div>
  <h2>{item.title}</h2>
  <div className="prices">
  <h3>${item.oldprice}</h3>
  <h3>${item.price}</h3>
 
          </div>
          </div>
 </Link>
    
)
}
export default Cards