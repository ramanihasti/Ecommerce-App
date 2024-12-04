import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../services/apiServices'
import { useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';

function ProductDetail({cart , setCart}) {
const [product , setProduct] = useState(null);
const params = useParams();

useEffect(() => {
    getSingleProduct(params.id).then((data) => {
        console.log("Single Product Data" , data);
        setProduct(data);
    })
} , [params.id])  

function handleAddToCart(e) {
    e.stopPropagation();
    const foundProduct = cart.find((value) => {
        if (value.id === product.id){
            return true;
        }
        return false;
    });

    if(foundProduct) {
        const updatedCard = cart.map((value) => {
            if(value.id === foundProduct.id) {
                return {...value, qty: value.qty + 1};
            }
            return value;
        });
        setCart(updatedCard);
    }else {
        setCart([...cart, {...product, qty:1}]);
    }
}

if(!product) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 px-16 py-12">
        <div className="h-[250px] md:h-[500px]">
            <img src={product.image} alt="" 
            className="h-full w-full object-contain border border-slate-300 p-8 rounded-lg"
            />
        </div>

        <div className="flex flex-col gap-4">
            <h2 className="text-[24px] font-[cursive] drop-shadow-md text-[#475064] font-semibold">Category: {product.category}</h2>
            <h3 className="text-xl font-serif text-[#664e2d]">{product.title
            }</h3>
            <div  className="text-[16px] font-[italic] text-[#2a4140]">
                <p>Rating: {product.rating.rate}</p>
                <p>Number of Reviews: {product.rating.count}</p>
            </div>
            <p className="text-[18px] font-[cursive] font-semibold text-teal-900">$ {product.price}</p>
            <div className="flex  flex-col md:flex-row gap-4">
            <Button gradientDuoTone={"primary"} className="w-[120px]" onClick={handleAddToCart}>Add to Card</Button>
            <Button gradientDuoTone={"primary"} className="w-[120px]">Buy Now</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail