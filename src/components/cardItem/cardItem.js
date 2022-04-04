
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './cardItem.css';


function CardItem({infItems}){
    const {tittle, image, price, id}= infItems
    return(
        <div className='containerProduct'>

            <img src={image} />
            <div className='containerPrice'>
                <h1>{tittle}</h1>
                <p>${price}</p>
            </div>
            
            <Button className='itemCount' variant="contained" color="primary"><Link to={`/productos/${id}`}>Seleccionar</Link></Button> 

        </div>
    )
}

export default CardItem;