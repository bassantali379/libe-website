import React from "react";
import "./List.css";
import Cards from "../Cards/Cards";
const List = () => {
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
            imgess:"/imges/17.jpg",
            imgess2:"/imges/4.jpg",
            title:" Cardigan",
            isNew:true,
            oldprice:19,
            price:12,
        },
        {
            id:3,
            imges:"/imges/5.jpg",
            title:"Dress",
            oldprice:19,
            price:12,
        },
        {
            id:4,
            imges:"/imges/3.jpg",
            title:"Skirt",
            oldprice:19,
            price:12,
        },
        {
            id:5,
            imges:"/imges/8.jpg",
            title:"Soute",
            oldprice:19,
            price:12,
        },
        {
            id:6,
            imges:"/imges/14.jpg",
            title:"Cardigan",
            oldprice:19,
            price:12,
        },
        {
            id:7,
            imges:"/imges/15.jpg",
            title:"Cardigan",
            oldprice:19,
            price:12,
        },
        {
            id:8,
            imges:"/imges/12.jpg",
            title:"Dress",
            oldprice:19,
            price:12,
        },
        {
            id:9,
            imges:"/imges/17.jpg",
            title:"Soute",
            oldprice:19,
            price:12,
        },
        {
            id:10,
            imges:"/imges/18.jpg",
            title:"Cardigant",
            oldprice:19,
            price:12,
        },
        {
            id:11,
            imges:"/imges/16.jpeg",
            title:"Dress",
            oldprice:19,
            price:12,
        },
        {
            id:11,
            imges:"/imges/7.jpg",
            title:"Soute",
            oldprice:19,
            price:15,
            
        },
       
      
        
    ];
    

    return(
        <div className="list3"> {data?.map(item=>(
            
               <Cards item={item} key={item.id}/>
               ))}
          
        </div>
    )
}

export default List;