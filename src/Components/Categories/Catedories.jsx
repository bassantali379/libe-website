import React from "react";
import "./Catedories.css";
import { Link } from "react-router-dom";
const Catedories =() =>{
    return(
        <div className="catedories">
            <div className="col">
            <div className="row">
                <img src="./imges/6.jpeg" alt="" />
                <button className="prow">
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row"> 
            <img src="./imges/12.jpg" alt="" />
                <button className="prow">
                    <Link className="link" to="/products/1">Women</Link>
                </button>
                </div>
                </div>
            <div className="col">
                <div className="row"> 
                <img src="./imges/8.jpg" alt="" />
                <button className="prow">
                    <Link className="link" to="/products/1"> New Season </Link>
                </button>
                </div>
            </div>
            <div className="col col-l">
            <div className="row">
            <div className="col">
            <div className="row"> <img src="./imges/9.webp" alt="" />
                <button className="prow">
                    <Link className="link" to="/products/1">Men</Link>
                </button>
                </div>
            </div>
            <div className="col">
            <div className="row"> <img src="./imges/10.webp" alt="" />
                <button className="prow">
                    <Link className="link" to="/products/1">Accessories</Link>
                </button>
                </div>
            </div>
            </div>
            <div className="row"> 
            <img src="./imges/13.jpeg" alt="" />
                <button className="shose">
                    <Link className="link" to="/products/1">Shoes</Link>
                </button>
                </div>
            </div>
        </div>
    )
}

 export default Catedories