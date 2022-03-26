import React, { useState, useEffect} from 'react';
import CardItem from '../cardItem/cardItem';
import './listProducts.css';
import ProductDetail from '../productDetail/productDetail';



function ListProducts(){
    const mockProducts = [
        {
            id :'vs1x1',
            tittle : 'Vela slim una zona',
            price : 700,
            image: 'https://i.imgur.com/upUlrdu.png',
            description: 'Vela Slim sirve para eliminar celulitis, modelar contornos y tonificar la piel ',
            
        },
        {
            id : 'vs2x1',
            tittle : 'Vela slim dos zonas',
            price : 1300,
            image: 'https://i.imgur.com/upUlrdu.png',
            description: 'Vela Slim sirve para eliminar celulitis, modelar contornos y tonificar la piel ',

        },
        {
            id : 'vs3x1',
            tittle : 'Vela slim tres zonas',
            price : 1900,
            image: 'https://i.imgur.com/upUlrdu.png',
            description: 'Vela Slim sirve para eliminar celulitis, modelar contornos y tonificar la piel ',

        },
        {
            id : 'vs4x1',
            tittle : 'Vela slim cuatro zonas',
            price : 2400,
            image: 'https://i.imgur.com/upUlrdu.png',
            description: 'Vela Slim sirve para eliminar celulitis, modelar contornos y tonificar la piel ',

        }
    ]

    const [products, setProducts] = useState ([])

    const getProducts = () => {
        return new Promise ((resolve, reject) =>{
            
            return resolve(mockProducts)
        })
    }
    useEffect (() => {
        getProducts().then((productos) =>{
            setProducts (productos)
        })
    },[])
    return(
        <>
        <div className='container'>
            
            {products.map((product) => {
                const {id} = product

                return (
                    
                    
                    <CardItem className="product" infItems={product} key={id} />
                    
                    
                    

                    
                )
            })}
            

        </div>
        <div className='container'>
            
            {products.map((product) => {
                const {id} = product

                return (
                    
                    
                    <div className='containetItemDetail'>
                        <ProductDetail infItems={product}/>
                    </div>
                    
                    
                    

                    
                )
            })}
            

        </div>
        
        </>
    )
}

export default ListProducts;