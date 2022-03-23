import React, { useState} from "react";
import OnAdd from './onAdd';
import Button from '@mui/material/Button';
import "./itemCount.css";


function ItemCount(){
    const [count, setCount ] = useState(1)
    const addClick = () => {
    
        setCount (count + 1);
        if (count<=1) return setCount(count + 1) ;
    }
    if (count<=0) return setCount(1) ;
    const removeClick = () => {
    
       
       
        setCount (count - 1);
        
    }
    return(
        <div className='addCart'>
            <div className="containerItemCount">
                <Button onClick={removeClick} className='buttonMas' variant="contained" color="primary">-</Button>
                <p className="cantidad">{count}</p>
                <Button onClick={addClick} className='buttonMas' variant="contained" color="primary">+</Button>

            </div>
            <OnAdd></OnAdd>

        </div>
    )
}

export default ItemCount;
