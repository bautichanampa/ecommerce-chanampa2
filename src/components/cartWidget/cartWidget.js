import fotoCarrito from "./carrito.png";
import './cartWidget.css';


const CartWidget = () => {
    return (
        <div>
            <img className="cartImage" src={fotoCarrito} />
        </div>
    )

}

export default CartWidget;