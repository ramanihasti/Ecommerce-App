import { Drawer } from 'flowbite-react'
import { HiShoppingCart } from "react-icons/hi";
import React from 'react'
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';

function CartDrawer({ isOpen , toggalOpen, setCart}) {
  // const { setCart } = value;
  const cart = useSelector((store) => {
    return store.cart.cartList;
  });

  return (
    <Drawer position='right' open={isOpen} onClose={toggalOpen}>
        <Drawer.Header title="Shop Cart" titleIcon={HiShoppingCart}/>
        <div>
          {cart.map((value) => {
            return <CartItem product={value} cart={cart} setcart={setCart}/>
          })}
        {/* {cart.map((value) => {
          return <CartItem product={value} cart={cart} setCart={setCart} />;
        })} */}
        </div>
      </Drawer>
  )
}

export default CartDrawer