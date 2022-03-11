import React from "react";
import logo from "./logo.png";
import Button from '@mui/material/Button';
function NavBar(){
    return(
       <header className="contenedorHeader">
           <div>
               <img className="logo" src={logo}/>
           </div>
           <ul className="navbar">
               <li><Button variant="contained" color="primary">Home</Button></li>
               <li><Button variant="contained" color="primary">Tienda</Button></li>
               <li><Button variant="contained" color="primary"> Sobre nosotros</Button></li>
               <li><Button variant="contained" color="primary">Contacto</Button></li>
           </ul>
       </header>
    )
}

export default NavBar;