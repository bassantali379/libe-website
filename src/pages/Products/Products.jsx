import React, { useState } from "react";
import "./Product.css"
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";
const Products = () => {
    const catId = parseInt(useParams().id)
    const [maxPrice,setMaxPrice] = useState(1000)
    const [sort,setSort] = useState(null)
   
    return(
        <div className="products">
            <div className="leftt1">
                <div className="filterItem1"> 
                <h2 className="h1">Product Categories</h2>
                <div className="inputItem1">
                    <input type="checkbox" id="1" value={1} />
                    <label htmlFor="1">Blouse</label>
                </div>
                <div className="inputItem1">
                    <input type="checkbox" id="2" value={2} />
                    <label htmlFor="2">Cardigan</label>
                </div>
                <div className="inputItem1">
                    <input type="checkbox" id="3" value={3} />
                    <label htmlFor="3">Skirts</label>
                </div>
                </div>
                <div className="filterItem1"> 
                <h2 className="h1">Filter by price</h2>
                <div className="inputItem1">
                    <span>0</span>
                    <input type="range" min={0}  max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                    <span>{maxPrice}</span>
                </div>
                </div>
                <div className="filterItem"> 
                <h2 className="h1">Sort by</h2>
                <div className="filterItem"> 
                <input type="radio"id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
                <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className="filterItem">
                <input type="radio"id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
                <label htmlFor="desc">Price (Highest first )</label>
                </div>
             </div>
             
            </div>
            <div className="right5">
                    <img className="catImg1" src="/img/18.jpg" alt="" />
                    <List catId={catId} maxPrice={maxPrice} sort={sort}/>
                </div>
            </div>
    );
};

export default Products;