import React from 'react'
import { Stack } from 'react-bootstrap'
import storeItems from '../data/storeItem.json'
import formatCurrency from './FormatCuurency';
import { Button } from 'react-bootstrap/';
import { useShoppingCart } from '../context/ShoppingCartContext';

function CartItem({id , quantity}) {
    const {removeItemFromCart} = useShoppingCart();
    const item = storeItems.find((i)=> i.id ===id);
    if(item==null) return null;

return (
    <Stack direction="horizontal" className='d-flex align-items-center' gap={2}>
        <img 
        src={item.imgUrl} 
        alt='cart-img'
        style={{width:"125px" , height:"75px",objectFit:"cover"}}
        />
        <div className='me-auto'>
            <div>
                {item.name} {" "}
                {quantity > 1 && (
                <span className='text-muted' style={{fontSize:"0.65rem"}}>
                    x{quantity}
                </span>
            )}
            <div className='text-muted' style={{fontSize:"0.75rem"}}>
                {formatCurrency(item.price)}
            </div>
            </div>
        </div>
        <div>
            {formatCurrency(item.price * quantity)}
        </div>
        <Button
        variant="outline-danger" 
        size="sm" 
        onClick={()=>removeItemFromCart(id)}>
            &times;
        </Button>

    </Stack>
    )
}

export default CartItem