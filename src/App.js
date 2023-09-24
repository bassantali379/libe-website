
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  
}from "react-router-dom";

 import Loginform  from "./Loginform";
import Appp from "./Appp";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import "./App.css"
import Products from "./pages/Products/Products";
import Products2 from "./pages/Products2/Products2";
import Products3 from "./pages/Products3/Products3";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signUp";
import Cart2 from "./pages/Cart2/Cart2";
import Stores from "./Components/Stores/Stores";
import Success from "./Components/Success/Success";
import  Checkout  from "./Checkout";
import  Checkout2  from "./pages/Checkout2/Checkout2";


const Layout = () =>{
  
  return(
    
    <div className="app">
      
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
    
  );
};
const router = createBrowserRouter([
  
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/cart2/:id",
        element:<Cart2/>,
      },
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/products/:id",
        element:<Products/>,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      },
      {
        path:"/products2/:id",
        element:<Products2/>,
      },
      {
        path:"/products3/:id",
        element:<Products3/>,
      },
      {
        path:"/stores/:id",
        element:<Stores/>,
      },
  
      {
        path:"/checkout2/:id",
        element:< Checkout2 />
      }
    ],

  }, 
 
  {
    path:"/login/:id",
    element:<Login/>,
  },
  {
    path:"/signUp/:id",
    element:<SignUp/>
  },
  {
    path:"/appp/:id",
    element:<Appp/>
  },
  {
    path:"/loginform/:id",
    element:<Loginform />
  },
  {
    path:"/success/:id",
    element:<Success />
  },
  {
    path:"/checkout/:id",
    element:< Checkout />
  },


]);



function App() {
  return (
    
    <div >
       <RouterProvider router={router} />
    
 
    </div>
   
    
  );
}

export default App ;

