import React from "react";
import "./Cart.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Cart = (id , title , oldprice , price , imges ) => {
  const data = [
    {
        id:1,
        img:"/imges/1.jpeg",
        img2:"/imges/2.jpg",
        title:"Long Sleeve Graphic Blouse",
        desc:"Long Sleeve Graphic Blouse",
        isNew:true,
        oldprice:19,
        price:12,
    },
    {
        id:2,
        img:"/imges/4.jpg",
        title:" Cardigan",
        desc:" Cardigan",
        isNew:true,
        oldprice:19,
        price:12,
    },
]
    return(
        <div className="cart">
            <h1>Products in your cart </h1>
            {data?.map(item=>(
                <div className="item0" key={item.id}>
                  <img src={item.img} alt="" /> 
                  <div className="details0">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price0">1 x ${item.price}</div>
                    </div> 
                    <DeleteOutlinedIcon className="delete0"/>
                </div>
            ))}
            <div className="total0">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
          <button className="ttt">PROCEED TO CHECKOUT</button>
          <span className="reset0">Reset Cart</span>
        </div>
    )
}
export default Cart