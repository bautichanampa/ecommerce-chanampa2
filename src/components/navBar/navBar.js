
import React from "react";
import { Link } from 'react-router-dom'
import logo from "./logo.png";
import Button from '@mui/material/Button';
import CartWidget from '../cartWidget/cartWidget';
import BasicMenu from './menuNavbar';
import './navBar.css';

function NavBar(){
    
    return(
       <header className="contenedorHeader">
           <div>
               <img className="logo" src={logo}/>
           </div>
           <div className="containerMenu">
           <ul className="navbar">
               
               <li><Button className="buttonNav"  ><Link className="aBlanco2" to={'/'}>Home</Link></Button></li>
               <li><BasicMenu ></BasicMenu></li>
               <li><Button className="buttonNav"  ><Link className="aBlanco2" to={'/sobreNosotros'}>Sobre nosotros</Link></Button></li>
               <li><Button className="buttonNav"  ><Link className="aBlanco2" to={'/contacto'}>Contacto</Link></Button></li> 
           </ul>
           <CartWidget />
           </div>
           
       </header>
       
    )
}

export default NavBar;