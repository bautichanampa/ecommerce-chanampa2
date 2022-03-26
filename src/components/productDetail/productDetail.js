import ItemCount from '../itemCount/itemcount';
import './ProductDetail.css';


function ProductDetail({infItems}){
    const {tittle, image, price, description}= infItems
    return(
        <div className='containerProductDetail'>

            <img className='imgProductDetail' src={image} />
            <div className='containerPriceDetail'>
                <h1 className='h1'>{tittle}</h1>
                <p className='description'>{description}</p>
                <p>${price}</p>
                <ItemCount />
            </div>
            
            

        </div>
    )
}

export default ProductDetail;