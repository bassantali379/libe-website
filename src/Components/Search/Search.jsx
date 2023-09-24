import React from "react";
import "./Search.css";
const Search = () =>{
    
    return(
        <div className="searchh">
            <form  className="search-formm">
                <input className="fas-fa-search" type="search" id="search-box"  placeholder="search here..."/>
                <label  htmlFor="search-box" className="fas-fa-search"></label>
              </form>
              
        </div>
    )
}
export default Search