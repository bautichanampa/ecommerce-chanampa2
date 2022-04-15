import fotoCarrito from "./carrito.png";
import fotoBorrarCarrito from './fotoBorrarCarrito.png';
import './cartWidget.css';
import { useState, useContext } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartContext from '../../context/cartContext';

const CartWidget = () => {
    const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log("cartProducts: ", cartProducts)

    return (
        <div className='cart-button'>
            <img src={fotoCarrito} className="cartImage"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <p className="countCart">{cartProducts.length}</p>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p>Carrito de Compras</p>
                <Divider />
                {cartProducts.map( (cartProducts) => {
                    return(
                        <MenuItem  key={cartProducts.id}>
                            <div className='itemCartModal' >
                                <div className='containerImageProductCart'>
                                    <img className="imageProductCart" src={`${cartProducts.image}`} /> 
                                </div>
                                <div className='item-cart-modal__info'>
                                    <p>{cartProducts.tittle}</p>
                                    <span className="cartProductPrice">$ {cartProducts.price}</span>
                                </div>
                                
                                <Button className="borrarCarrito" onClick={deleteProduct}>X</Button>
                                
                            </div>
                        </MenuItem>
                    )
                })}
                <div className="precioTotalCarrito"> 
                <p>Precio total: {totalPrice}</p>
                </div>
                <Divider />
                <div className='footer-modal-cart'>
                    <Button className="btnCustom" variant="contained" color="primary"><Link className="aBlanco" to="/finalizarCompra">Iniciar la compra</Link></Button>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget