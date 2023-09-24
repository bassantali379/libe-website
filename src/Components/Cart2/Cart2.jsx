import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "../formatCurrency/formatCurrency"
const Cart2 = ({id , title ,  price , imges} ) => {
  const quantity = 0;
    return (<Card style={{ height: "100%", alignItems:"center" }}>
        <Card.Img src={imges} variant="top" style={{ height: "400px" , objectFit: "cover", width: "100" }}/>
        <Card.Body>
         <Card.Title style={{ display:"flex",  justifyContent :"space-between",alignItems:"center" }}  >
             <span style={{ fontSize: "2" }} >{title}</span>
             <span  style={{ color: "gray", marginLeft:"2" }}>{formatCurrency(price)}</span>

        </Card.Title>
        <div style={{ marginTop:"20px"}}>
            {quantity === 0 ?
             (<Button style={{ width: "100%", backgroundColor:"#2879fe",border:"0", color:"white", padding:"10px", borderRadius:"5px",  marginTop:"20px" }} >Add to Cart</Button> 
             ) : (
            <div style={{display:"flex",alignItems:"center", justifyContent : "center" , flex:"column", gap:"0.6rem"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem"}} >
                <Button style={{ backgroundColor:"#2879fe",border:"0", color:"white", padding:"7px", borderRadius:"5px"}}>-</Button>
                <span style={{fontSize:"3"}}>1 in cart</span> 
                <Button style={{ backgroundColor:"#2879fe",border:"0", color:"white", padding:"7px", borderRadius:"5px"}}>+</Button> 
               </div>
               
                <Button variant="danger" style={{backgroundColor:"red", color:"white",border:"0", padding:"7px", borderRadius:"4px",}} size="sm">Remove</Button>
            </div>
           )}
        </div>
        </Card.Body>
    </Card>
    );
}
export default Cart2