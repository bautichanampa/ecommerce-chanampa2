

import ItemCount from '../itemCount/itemcount';
import './cardItem.css';


function CardItem({tittle, image, price}){
    return(
        <div className='containerProduct'>
            <h1>{tittle}</h1>
            <img src={image} />
            <p>${price}</p>
            
            <ItemCount />

        </div>
    )
}

export default CardItem;