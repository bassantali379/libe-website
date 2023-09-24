import React, { useState } from "react";
import "./Checkout2.css"
const Checkout2 = (props) =>{
const {label, errorMessage, onChange, id, ...inputProps } = props;
const   [focused, setFocused] = useState(false);
const handleFocus = (e) => {
    setFocused(true);
}
    return(

        <div className="container">
           
           <label className="qpp">{label}</label>
            <input className="email" {...inputProps} onChange={onChange} onBlur={handleFocus}
            onFocus={() =>
             inputProps.name === "confirmPassword" && setFocused(true)}
            focused={focused.toString()}/>
            <span className="span">{errorMessage}</span>
               
           </div>
           
      
    )
}
export default Checkout2