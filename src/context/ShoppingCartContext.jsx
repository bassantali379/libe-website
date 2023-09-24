import { Children, createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext ({});

const ShoppingCartProvider = (children) => {
    const [cartItems , setcartItems] = useState([]);
  return (
  <ShoppingCartContext.Provider value={{cartItems}}>{children}</ShoppingCartContext.Provider> 
  );
  
};

export default ShoppingCartProvider;
export const useShoppingCart = () =>{
   return useContext( ShoppingCartContext);
}