
import React from "react";
import { Link } from 'react-router-dom'
import logo from "./logo.png";
import Button from '@mui/material/Button';
import CartWidget from '../cartWidget/cartWidget';
import './navBar.css';

function NavBar(){
    return(
       <header className="contenedorHeader">
           <div>
               <img className="logo" src={logo}/>
           </div>
           <ul className="navbar">
               
               <li><Button className="buttonNav" variant="contained" color="primary"><Link to={'/'}>Home</Link></Button></li>
               <li><Button className="buttonNav" variant="contained" color="primary"><Link to={'/sobreNosotros'}>Sobre nosotros</Link></Button></li>
               <li><Button className="buttonNav" variant="contained" color="primary"><Link to={'/contacto'}>Contacto</Link></Button></li>
               <li><CartWidget /></li>
               
           </ul>
           
       </header>
       
    )
}

export default NavBar;