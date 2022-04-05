
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './cardItem.css';



function CardItem({products}){
    
    return(
        <div className='containerProduct'>
        
        <>
            <img src={products.image} />
            <div className='containerPrice'>
                <h1 className='tituloProducto'>{products.tittle}</h1>
                <p>${products.price}</p>
            </div>
            
            <Button className='itemCount' variant="contained" color="primary"><Link className="aBlanco" to={`/productos/${products.id}`}>Seleccionar</Link></Button> 
        </>
    
        </div>
    )
}

export default CardItem;