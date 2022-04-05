
import ListProducts from '../components/listProducts/listProducts';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './HomePage.css'

function HomePage(){
    return (
        <div>
          <div className='containerTratamientos'>
          {/* <h1 className='tituloTratamiento'>Tratamientos</h1> */}
          </div>
          <div className='containerCategorySelector'>
            <h2 variant="contained" color="primary"><Link className='aCeleste' to={`/`}>Todos</Link></h2>
            <h2 variant="contained" color="primary"><Link className='aCeleste' to={`/category/vela`}>Vela</Link></h2>
            <h2 variant="contained" color="primary"><Link className='aCeleste' to={`/category/crio`}>Criolipolisis</Link></h2>
          </div>
          <ListProducts/>
        </div>
    )

    
}

export default HomePage;