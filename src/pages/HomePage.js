
import ListProducts from '../components/listProducts/listProducts';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './HomePage.css'


function HomePage(){
    return (
        <div className='containerHomer'>
          
          <ListProducts/>
        </div>
    )

    
}

export default HomePage;