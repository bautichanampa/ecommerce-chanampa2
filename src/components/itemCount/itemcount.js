import "./itemCount.css";
import React, { useState} from "react";
import OnAdd from './onAdd';
import Button from '@mui/material/Button';



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
                <Button onClick={removeClick} className='button' variant="contained" color="primary">-</Button>
                <p className="cantidad">{count}</p>
                <Button onClick={addClick} className='button' variant="contained" color="primary"  >+</Button>

            </div>
            <OnAdd count={count}></OnAdd>

        </div>
    )
}

export default ItemCount;
