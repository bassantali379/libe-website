import React, { useEffect, useState } from "react";
import "./FeaturedProducts2.css";

import Cards3 from "../Cards3/Cards3";



const FeaturedProducts2 = ({type}) =>{
    
const data = [
    {
        id:1,
        imges:"/imges/14.jpg",
        title:" Cardigan and Skirt",
        isNew:true,
        oldprice:19,
        price:16,
    },
    {
        id:2,
        imgess:"/imges/23.jpg",
        imgess1:"/imges/24.jpg",
        title:" Dress",
        isNew:true,
        oldprice:19,
        price:12,
    },
    {
        id:3,
        imges:"/imges/17.jpg",
        title:"Soute",
        isNaN:true,
        oldprice:19,
        price:12,
    },
    {
        id:4,
        imges:"/imges/18.jpg",
        title:"Cardigan",
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
               <Cards3 item={item} key={item.id}/>
               ))}
               
                
                </div>  
            </div>
    )
}
export default FeaturedProducts2;