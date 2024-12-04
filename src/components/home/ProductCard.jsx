import { Button } from 'flowbite-react'
import React from 'react'
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slice/slice';

function ProductCard({product }) {
    const dispatch = useDispatch();
    const cart = useSelector((store) => {
        return store.cart.cartList
    });

    const navigate = useNavigate();

    function goToProduct() {
        navigate(`/products/${product.id}`)
    }

    function handleAddToCart(e) {
        e.stopPropagation(); //stopPropagation use isi liye kiya hain ki button ke click pe hume ProductDetail Component ke page pe nhi jana hain isi liye.
        // iska meaning ye hoota hain ke aage ka onclick ka kam stop kar dena hain.

        // second method with useRedux hook
        console.log("addToCart" , addToCart({ ...product, qty:1 }));
        dispatch(addToCart({ ...product, qty:1 }));

        // first method use useState hook
        // const foundProduct = cart.find((value) => {
        //     if (value.id === product.id){
        //         return true;
        //     }
        //     return false;
        // });

        // if(foundProduct) {
        //     const updatedCard = cart.map((value) => {
        //         if(value.id === foundProduct.id) {
        //             return {...value, qty: value.qty + 1};
        //         }
        //         return value;
        //     });
        //     setCart(updatedCard);
        // }else {
        //     setCart([...cart, {...product, qty:1}]);
        // }
    }
 
  return (
    <div className="border border-neutral-400 hover:border-emerald-700 rounded-md flex flex-col gap-4 p-2 cursor-pointer" onClick={goToProduct}>
        <div className="h-[200px]">
            <img src={product.image} alt="" className="h-full w-full object-contain"/>
        </div>

        <div className="flex flex-col gap-2 px-2 py-4">
            <h5 className="text-[18px] font-serif text-[#314851] font-semibold">{product.title}</h5>
            <p className="text-[17px] font-[italic] text-teal-950">Rating: {product.rating.rate}</p>
            <div className="flex items-center justify-between">
                <p className="text-[16px] font-[cursive] text-[#172e2e]">${product.price}</p>
                <Button gradientDuoTone={"primary"} pill size="xs" className='shrink-0 ' onClick={handleAddToCart}>
                    <span className="flex items-center gap-1">
                    <HiPlus />
                    <span>Add to Card</span>
                    </span>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard