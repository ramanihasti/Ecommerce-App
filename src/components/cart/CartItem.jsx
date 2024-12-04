import { Button } from 'flowbite-react'
import React from 'react'
import { HiTrash, HiPlus, HiMinus } from "react-icons/hi";
import { useDispatch, } from 'react-redux';
import { decreaseQty, increaseQty, removeFromCart } from '../../redux/slice/slice';

function CartItem({ product,cart ,setcart }) {
    const dispatch = useDispatch();

    function handleDelete() {
        // const updatedCart = cart.filter((value) => {
        //     if(value.id === product.id) {
        //         return false;
        //     }
        //     return true;
        // });
        // setcart(updatedCart);
        dispatch(removeFromCart(product.id));
    }

    function handleIncrese() {
        // const updatedCart = cart.map((value) => {
        //     if(value.id === product.id) {
        //         return {...value, qty: value.qty + 1};
        //     }
        //     return value;
        // })
        // setcart(updatedCart);
        dispatch(increaseQty(product.id));
    }

    function handleDecrease() {
        // const updatedCart = cart.map((value) => {
        //     if(value.id === product.id) {
        //         if(value.qty > 1) {
        //             return {...value, qty: value.qty - 1};
        //         }
        //         return value;
        //     }
        //     return value;
        // });
        // setcart(updatedCart);    
        dispatch(decreaseQty(product.id)); 
    }

  return (
    <div className="flex items-center gap-2 border-t pt-2 pb-2">
        <div  className="h-[50px] w-[50px] overflow-hidden rounded-full border border-slate-400 shrink-0"   >
            <img src={product.image} alt="" />
        </div>

        <div className="flex flex-col gap-1 grow-[1]">
            <p className="text-md font-serif">{product.title}</p>
            <p className="text-[14px] font-[cursive]">$ {product.price  }</p>

            <div className="flex items-center gap-2">
                <Button size="xs" className="p-0" pill>
                    <HiMinus onClick={handleDecrease}/>
                </Button>
                <p>{product.qty}</p>
                <Button size="xs" className="p-0" pill>
                    <HiPlus onClick={handleIncrese}/>
                </Button>
            </div>
        </div>

        <div>
            <Button size="sm" className="p-0" pill>
                <HiTrash onClick={handleDelete}/>
            </Button>
        </div>
    </div>
  )
}

export default CartItem