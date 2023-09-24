import React, { useState } from "react";
import "./Products.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { Link } from "react-router-dom";

const Product = () => {
    const [selectedImg,setSelectedImg] = useState(0);
    const [quantity,setQuantity] = useState(1);
    const images = [
        "/img/6.jpg",
        "/imges/19.jpg",
        "/img/pex4.mp4",
    ];
    return (
        <div className="product">
             <div className="left9">
                <div className="images9">
          <img className="wiow" src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
          <img className="wiow" src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
          <video aut className="wiow" src={images[2]} alt="" onClick={e=>setSelectedImg(2)} />
                </div>
                <div className="mainImg9">
                    <img className="wiow1" src={images[selectedImg]} alt="" />
                    <video autoPlay loop aut className="wioo" src={images[selectedImg]} alt="" />
                </div>
             </div>
             <div className="right3">
                <h1>Blouse</h1>
                <span className="price9">$199</span>
                <p className="p9">Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Dolorem at culpa totam architecto distinctio,
                       veritatis cumque velit harum eligendi explicabo,
                        repellendus quas nostrum? Nisi amet 
                    laborum, tenetur dolorem dicta consequuntur.</p>
                    <div className="quantity9">
                        <button onClick={() =>setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                        {quantity}
                        <button onClick={() =>setQuantity((prev) => prev + 1)}>+</button>
                    </div>
                    <button className="add9">
                        <AddShoppingCartIcon/>  <Link className="bag" to="/cart2/1"> ADD TO CART </Link>
                    </button>
                    <div className="link9">
                        <div className="item9">
                           <FavoriteBorderIcon/> ADD TO WISH LIST
                        </div>
                        <div className="item9">
                            <BalanceIcon/>  ADD TO COMPARE 
                        </div>
                    </div>
                    <div className="infoo9">
                        <span>Vendor: Polo</span>
                        <span>Product Type: Bloze</span>
                        <span>Tag: Blouse, women, Top</span>  
                    </div>
                    <div>
                    <hr />
                    </div>
                    <div className="info9">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>ADDITIONAL INFORMATION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                    
                    
             </div>
        </div>
    )
}

export default Product