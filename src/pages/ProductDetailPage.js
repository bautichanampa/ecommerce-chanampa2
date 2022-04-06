import React, { useState, useEffect} from 'react';
import ItemCount from '../components/itemCount/itemcount';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockProducts';
import './ProductDetailPage.css'



function ProductDetailPage (){
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect (()=>{
        productFiltrer(mockProducts, id)
    },[])

    const productFiltrer = () =>{
        return mockProducts.map((product)=>{
            if (product.id == id)
            {
                return setProduct (product)

                    
                    
                    
            }
        })
    }

    
    return (
        <div className='containerProductDetail'>
            <img className='imgProductDetail' src={product.image} />
            <div className='containerPriceDetail'>
                <h1 className='h1'>{product.tittle}</h1>
                <p className='description'>{product.description}</p>
                <p>${product.price}</p>
                <ItemCount data={product} />
            </div>
        </div>
    )

}

export default ProductDetailPage;