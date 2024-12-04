import { Button, Label, Radio, Select } from 'flowbite-react'
import { HiShoppingCart } from "react-icons/hi";
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/home/ProductCard';
import { getAllCategories, getAllProduct, getSingleCategories } from '../services/apiServices';

function Home({ cart , setCart }) {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    getAllProduct(sortOrder).then((data) => {
      console.log("All Product Data", data);
      setProducts(data);
    });
  }, [sortOrder]);

  useEffect(() => {
    getAllCategories().then((data) => {
      console.log("All Categories Data", data);
      setCategories(data);
    });
  }, []);

function handleChange(e) {
  if( e.target.value === "all"){
    getAllProduct().then((data) => {
      console.log("All Product Data", data);
      setProducts(data);
    });
  } else{
    getSingleCategories(e.target.value).then((data) => {
      console.log("Single Product Data" , data);
      setProducts(data)
    })
  };
  // console.log("event" , event);
}


  function handleSelect(e) {
    setSortOrder(e.target.value)
  }
  
  if (!products) return null;
  if (!categories) return null;


  return (
    <>
    <div className="flex justify-end mb-4">
        <Select className="w-fit mr-4" onChange={handleSelect}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </div>
      <div className="grid sm:grid-cols-[180px_1fr] md:grid-rows-1 gap-4">
        <div className="">
          <ul className="flex flex-col gap-2 p-4">
            <h2 className="text-xl font-serif font-semibold text-[#1e4747]">Categories</h2>
            <li className="flex flex-row gap-2" key={"all"}>
                <Radio
                  id={"all"}
                  name="category"
                  value={"all"}
                  className="mt-1 cursor-pointer"
                  onChange={handleChange}
                />
                <Label className="text-[16px] font-serif text-[#5d4f3d]" htmlFor={"all"}>{"all"}</Label>
              </li>
            
            {categories.map((value) => {
              return <li key={value} className="flex flex-row gap-2">
                <Radio
                  id={value}
                  name="category"
                  value={value}
                  className="mt-1 cursor-pointer"
                  onChange={handleChange}
                />
                <Label className="text-[16px] font-serif text-[#5d4f3d]" htmlFor={value}>{value}</Label>
              </li>
            })}
          </ul>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-y-8 gap-x-4">
          {products.map((value) => {
            return (
              <ProductCard
                key={value.id}
                product={value}
                cart={cart}
                setCart={setCart}
                // image={value.image}
                // title={value.title}
                // rating={value.rating.rate}
                // price={value.price}
              />
            )
          })}
        </div>

      </div>

    </>
  )
}

export default Home