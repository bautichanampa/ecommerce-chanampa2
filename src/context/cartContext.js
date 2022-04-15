import { ThemeContext } from "@emotion/react";
import { createContext,useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const addProductToCart = (dataProduct) => {
    console.log("agregar al carrito", dataProduct)
    setCartProducts(cartProducts => [...cartProducts, dataProduct])
    setTotalPrice(totalPrice + dataProduct.price)
    
    }
    const deleteProduct = (dataProduct) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== dataProduct.id))
        console.log('se borro',cartProducts)
    }
    const data = {
    cartProducts,
    addProductToCart,
    deleteProduct,
    totalPrice
    }  
    

return(
    <CartContext.Provider value={data}>
         {children}
    </CartContext.Provider>
)}
export {CartProvider}
export default CartContext