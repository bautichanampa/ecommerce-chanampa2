import React, { useState, useEffect} from 'react';
import CardItem from '../cardItem/cardItem';
import './listProducts.css';
import mockProducts from '../../mockProducts';




function ListProducts(){
    
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
        
        
        </>
    )
}

export default ListProducts;