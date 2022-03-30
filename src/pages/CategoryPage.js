import React, { useState, useEffect} from 'react';
import CardItem from '../components/cardItem/cardItem';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockProducts';
import './ProductDetailPage.css'



function CategoryPage (){
    const { category } = useParams()
    const [product, setProduct] = useState({})

    useEffect (()=>{
        productFiltrer(mockProducts, category)
    },[])

    
    const productFiltrer = () =>{
        return mockProducts.map((product)=>{
            if (product.category === category)
            {
                return setProduct(product)

                    
                    
                    
            }
        })
    }

    
    return (
        <div className='container'>
            
            
            {product.map((product) => {
                

                return (
                    
                    
                    <CardItem className="product" infItems={product} />
                    
                    
                    

                    
                )
            })}
            

        </div>
    )

}

export default CategoryPage;