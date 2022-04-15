import {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../context/cartContext';
import './cartPage.css'
import DeleteIcon from '../components/cartWidget/fotoBorrarCarrito.png';


const CartPage = () => {
    const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)
    return(
        
        <div className='containerGeneral'> 
        <div className='cartPage'>
            <div className='headCartPage'>
                <h2 className='tituloCartPageProducto'>Productos en el carrito</h2>
                
            </div>
            {cartProducts.map( (cartProduct) => {
                return(
                <div className='contendorProductCartPage'>
                    
                        <img className='imgProductCartPage' src={cartProduct.image}/>
                   
                    <div className='contenedorTituloProducto'>
                        
                        <p>{cartProduct.tittle}</p>
                    </div>
                    <div className='cartPagePrice'>
                        <p>${cartProduct.price}</p>
                    </div>
                    
                    <div>
                        <Button className='eliminarCarrito' onClick={deleteProduct}>Elimar del carrito</Button>
                    </div>

                </div>
                )})}
            <div className='footerCartPage'>
                <p className='precioTotal'>precio total: {totalPrice}</p>
                <Button>Finalizar compra</Button>
            </div>
        </div>        
    </div>   
   
    )}

export default CartPage