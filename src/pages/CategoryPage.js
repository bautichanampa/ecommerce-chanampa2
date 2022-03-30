import React, { useState, useEffect} from 'react';
import CardItem from '../components/cardItem/cardItem';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockProducts';
import './ProductDetailPage.css'



function CategoryPage (){
    const { category } = useParams()
    const [products, setProducts] = useState({})
    

   

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

    useEffect (()=>{
        productFiltrer(mockProducts, category)
    },[])
    const productFiltrer = () =>{
        return products.map((product)=>{
            if (product.category === category)
            {
                return setProducts(product)

                    
                    
                    
            }
        })
    }

    
    return (
        <div className='container'>
            
            
            {products.map((product) => {
                

                return (
                    
                    
                    <CardItem className="product" infItems={product} />
                    
                    
                    

                    
                )
            })}
            

        </div>
    )

}

export default CategoryPage;