import React, { useState, useEffect} from 'react';
import CardItem from '../cardItem/cardItem';
import './listProducts.css';
import mockProducts from '../../mockProducts';
//import db from '../../firebase'
//import { collection, getDocs} from 'firebase/firestore'
//import { async } from '@firebase/util';




function ListProducts(){
    
    const [products, setProducts] = useState ([])

    //const getProducts = async () => {
        //const itemsCollection = collection(db, 'tratamientos')
        //const tratamientosSnapshot = await getDocs(itemsCollection)
        //const tratamientosList = tratamientosSnapshot.docs.map((doc) => {
                //let products = doc.data()
                //products.id = doc.id
               // console.log(products)
                //return products
            //}
            
        //)
        
        
    //}
    const getProducts = () => {
        return new Promise ((resolve, reject) =>{
            
            return resolve(mockProducts)
        })
    }
    useEffect (() => {
        getProducts().then((products) =>{
            setProducts (products)
        })
    },[])
    return(
        <>
        <div className='container'>
            
            {products.map((product) => {
                const {id} = product

                return (
                    
                    
                    <CardItem className="product" products={product} key={id} />
                    
                    
                    

                    
                )
            })}
            

        </div>
        
        
        </>
    )
}

export default ListProducts;