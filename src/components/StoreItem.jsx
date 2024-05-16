import React from 'react'
import { Card } from 'react-bootstrap'
import "../components/card.css"
import formatCurrency from './FormatCuurency';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';

const StoreItem = ({id ,name, price ,imgUrl}) => {
    const {getItemsCount , increaseCartCount,decreaseCartCount , removeItemFromCart} = useShoppingCart();
    const count = getItemsCount(id);
return (<Card className='h-100'>
    <Card.Img src={imgUrl} variant='top' id='card'></Card.Img>
    <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-inline'>
            <span className='fs-2'>{name}</span>
            <span className='text-muted me-2'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
            {count === 0 ? ( <Button className='w-100' onClick={()=>increaseCartCount(id)}>Add To Cart</Button> ) :
            (
            <div className='d-flex align-items-center flex-column gap-3' >
                <div className='d-flex align-items-center justify-content-center gap-3'>
                    <Button onClick={()=>decreaseCartCount(id)}>-</Button>
                    <span className='fs-2'>{count} in cart</span>
                    <Button onClick={()=>increaseCartCount(id)}>+</Button>  
                </div>
                <Button size='sm' variant='danger' onClick={()=>removeItemFromCart(id)}>Remove</Button>
            </div>
            )}
        </div>
    </Card.Body>
</Card>);

};

export default StoreItem