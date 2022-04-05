import React, { useState, useEffect} from 'react';
import CardItem from '../components/cardItem/cardItem';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockProducts';
import './ProductDetailPage.css'



function CategoryPage (){
    const { category } = useParams()
    const [products, setProducts] = useState([])
    
    const getProducts =  new Promise ((res) =>{
            res(mockProducts);
        })
   
    useEffect (() => {
        getProducts.then((products) =>{
            if (category){
                const type = products.filter((e) => e.category === category)
                setProducts(type)
            }else {
                setProducts(products)
            }
        })
             .catch(err => console.log(err))
        },[category])
    
    
   
    return (
        <div className='container'>
            {products.map((product) => {
                

                return (
                    
                    
                    <CardItem className="product" products={product}  />
                    
                    
                    

                    
                )
            })}
        </div>
    )

}

export default CategoryPage;