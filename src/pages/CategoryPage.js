import React, { useState, useEffect} from 'react';
import CardItem from '../components/cardItem/cardItem';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockProducts';
import './ProductDetailPage.css'



function CategoryPage (){
    const { category } = useParams()
    const [products, setProducts] = useState({})
    

   
    useEffect (() => {
    const getProducts = () => {
        return new Promise ((resolve) =>{
            
                
             const myProducts = category
              ? mockProducts.filter((item) => item.category === category)
              : mockProducts;
        
            resolve(myProducts);
             
        })
    }
    
    getProducts.then((productos) =>{
        setProducts (productos);
        console.log(products);
    })
    return (
        <div className='container'>
            
            {products.map((product) => {
                const {id} = product

                return (
                    
                    
                    <CardItem className="product" infItems={product} key={id} />
                    
                    
                    

                    
                )
            })}
            

        </div>
    )
    
    },[])

    


    
    

}

export default CategoryPage;