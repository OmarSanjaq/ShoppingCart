import { createContext, useContext, useState , useEffect } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart")
?JSON.parse(localStorage.getItem("shopping-cart")) 
: [];


const ShoppingCartProvider = ({children}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [cartItems,setCarItems] = useState(initialCartItems);
    useEffect(()=>{
        localStorage.setItem("shopping-cart",JSON.stringify(cartItems))
    },[cartItems])
    const openMenu =()=>{
        setIsOpen(true);
    }
    const closeMenu =()=>{
        setIsOpen(false);
    }


    const cartQuantity = cartItems.reduce(
        (quantity , item )=> item.quantity + quantity,
        0
    );


    const getItemsCount=(id)=>{
        return cartItems.find((item)=> item.id === id)?.quantity || 0
    };
    const increaseCartCount = (id)=>{
        setCarItems((currItem)=>{
            if(currItem.find(item =>item.id === id)==null){
                return [...currItem, {id,quantity :1}];
            }else{
                return currItem.map((item)=>{
                    if(item.id === id){
                        return {...item , quantity : item.quantity+1}
                    }else{
                        return item;
                    }
                });
            }
        });
    } ;

    const decreaseCartCount = (id)=>{
        setCarItems((currItem)=>{
            if(currItem.find(item =>item.id === id)==null){
                return currItem.filter((item)=>item.id !==id);
            }else{
                return currItem.map((item)=>{
                    if(item.id === id){
                        return {...item , quantity : item.quantity - 1}
                    }else{
                        return item;
                    }
                });
            }
        });
    } ;

    const removeItemFromCart = (id)=>{
        setCarItems((currItem)=> currItem.filter((item)=>item.id !== id));
    }
    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            getItemsCount,
            increaseCartCount,
            decreaseCartCount,
            removeItemFromCart,
            openMenu,
            closeMenu,
            cartQuantity,
            }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;
export const useShoppingCart = ()=>{
    return useContext(ShoppingCartContext);
}