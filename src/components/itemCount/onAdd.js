import Button from '@mui/material/Button';
import count from './itemcount';



function OnAdd(){
     const addToCart = () =>{
         {alert(count)};
         console.log(count.value)
     }
    return(
    <Button onClick={addToCart} className='buttonAddToCart' variant="contained" color="primary"> Agregar al carrito</Button>
    )
}


export default OnAdd;