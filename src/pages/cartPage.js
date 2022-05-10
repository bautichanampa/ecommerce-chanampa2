import {useState, useContext} from 'react'
import { Button } from '@mui/material';
import CartContext from '../context/cartContext';
import './cartPage.css'
import Modalcostum from '../components/modal/modal'
import db from '../firebase';
import {addDoc, collection} from 'firebase/firestore'
import { async } from '@firebase/util';

const CartPage = () => {
    const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({name:'',
    phone:'',
    email:''})
    const [order, setOrder] = useState (
        {
            buyer:formData,
            items: cartProducts.map((cartProduct)=>{
                return{
                    id: cartProduct.id,
                    tittle: cartProduct.tittle,
                    price: cartProduct.price

                }
            }
            ),
            total: totalPrice
        }
    )
    
    const pushOrder = async() =>{
        const turnosFire = collection(db, 'turnos')
        const orderDoc = await addDoc(turnosFire, order)
        console.log('orden para fire', orderDoc)
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
        console.log(formData)
        console.log(order)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setOrder({
            ...order,
            buyer: formData}
        )
        pushOrder()
        
    }
    
    return(
        <>
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
            <Button onClick={() => setOpenModal(true)}>Finalizar compra</Button>
        </div>
    </div>        
    </div>   
            <Modalcostum handleClose={()=>setOpenModal(false)} open={openModal}>
                <h2 className='tituloFormDatos'>Completa tus datos para reservar un turno</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <label>Nombre</label>
                    <input name='name' onChange={handleChange}></input>
                    <label>Telefono</label>
                    <input name='phone' onChange={handleChange}></input>
                    <label>Mail</label>
                    <input name='email' onChange={handleChange}></input>
                    <button type='submit' >Enviar</button>
                </form>

                
            </Modalcostum>
        
    </>
    )}

export default CartPage