import Button from '@mui/material/Button';




function OnAdd( {count}){
    
     const addToCart = () =>{
         alert('agregaste ',count, 'tratamientos al carrito');
         console.log('agregaste ',count, 'tratamientos al carrito');
     }
    return(
    <Button onClick={addToCart} className='buttonAddToCart' variant="contained" color="primary"> Agregar al carrito</Button>
    )
}


export default OnAdd;