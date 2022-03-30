

import ItemCount from '../itemCount/itemcount';
import './cardItem.css';


function CardItem({infItems}){
    const {tittle, image, price}= infItems
    return(
        <div className='containerProduct'>

            <img src={image} />
            <div className='containerPrice'>
                <h1>{tittle}</h1>
                <p>${price}</p>
            </div>
            
            <ItemCount className='itemCount' />

        </div>
    )
}

export default CardItem;