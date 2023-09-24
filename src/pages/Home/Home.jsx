import React from "react";
import Slider from "../../Components/Silder/Slider";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import "./Home.css"
import Catedories from "../../Components/Categories/Catedories";
import Contact from "../../Components/Contact/Contact";
import FeaturedProducts2 from "../../Components/FeaturedProducts2/FeaturedProducts2";




const Home = () => {
    return(
        <div className="home">
          
          <Slider/> 
          <FeaturedProducts type="featured"/>
           <Catedories/>
          <FeaturedProducts2 type="trending"/>
          <Contact/> 
        
        </div>
    )
}

export default Home