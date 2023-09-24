import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";

import Cards2 from "../Cards2/Cards2";



const FeaturedProducts = ({type}) =>{
    
const data = [
    {
        id:1,
        imges:"/imges/1.jpeg",
        imges2:"/imges/2.jpg",
        title:"Long Sleeve Graphic Blouse",
        isNew:true,
        oldprice:19,
        price:12,
    },
    {
        id:2,
        imgess:"/imges/4.jpg",
        title:" Cardigan",
        isNew:true,
        oldprice:19,
        price:12,
    },
    {
        id:3,
        imges:"/imges/5.jpg",
        title:"Dress",
        isNaN:true,
        oldprice:19,
        price:12,
    },
    {
        id:4,
        imges:"/imges/3.jpg",
        title:"Skirt",
        isNaN:true,
        oldprice:19,
        price:12,
    } 
    
];

    
    return(
        <div className="featuredProducts">
          <div className="to">
            <h1 className="qqq">{type}products</h1>
            <p className="QQQ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem blanditiis, inventore repudiandae eaque harum. Suscipit earum cumque nostrum neque dolor minima quia! Ipsum corporis enim, illum vitae provident obcaecati?</p>
            </div>
            <div className="bott">
                
               {data.map(item=>(
               <Cards2 item={item} key={item.id}/>
               ))}
               
                
                </div>  
            </div>
    )
}
export default FeaturedProducts;