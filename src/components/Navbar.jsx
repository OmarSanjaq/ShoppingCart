import React from 'react'
import {Button, Container, Nav,Navbar as NavbarBs} from "react-bootstrap"
import { Link , NavLink } from 'react-router-dom'
import "./Navbar.css"
import ShoppingCartProvider, { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = function() {
    const {openMenu , cartQuantity} = useShoppingCart();
return (
    <NavbarBs sticky='top' className='navPageStyle'>
        <Container>
            <Nav className='innerNav'>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
        </Container>
        <Button 
        varient="outline-primary" 
        className='rounded-circle' 
        id="cartBtn"
        onClick={openMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" id="cart" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
<div id='notification' className='rounded-circle'>
{cartQuantity}
</div>
        </Button>
    </NavbarBs>
    
);
};

export default Navbar