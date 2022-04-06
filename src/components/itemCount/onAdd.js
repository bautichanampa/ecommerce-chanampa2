import './onAdd.css';
import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CartContext from '../../context/cartContext';





function OnAdd({data}){
    const count = data[1];
    const dataProduct = data[0];
    const {cartProducts, addProductToCart} = useContext(CartContext)
     const addToCart = () =>{
         console.log(dataProduct*count)
        addProductToCart(dataProduct)
     }
    return(
    
    <Button onClick={addToCart} className='buttonAddToCart' variant="contained" color="primary"  > Agregar al carrito</Button>
    )
}


export default OnAdd;