
import Button from '@mui/material/Button';
import './cardItem.css';


function CardItem({tittle, image, price}){
    return(
        <div className='containerProduct'>
            <h1>{tittle}</h1>
            <img src={image} />
            <p>${price}</p>
            <Button className='buttonAddToCart' variant="contained" color="primary"> Agregar al carrito</Button>

        </div>
    )
}

export default CardItem;