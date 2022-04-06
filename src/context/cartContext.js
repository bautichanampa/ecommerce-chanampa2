import { ThemeContext } from "@emotion/react";
import { createContext,useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])


const addProductToCart = (dataProduct) => {
    console.log("agregar al carrito", dataProduct)
    setCartProducts(cartProducts => [...cartProducts, dataProduct])
    
}
const data = {
    cartProducts,
    addProductToCart
}


return(
    <CartContext.Provider value={data}>
         {children}
    </CartContext.Provider>
)}
export {CartProvider}
export default CartContext