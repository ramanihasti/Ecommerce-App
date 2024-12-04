import { Button, Navbar, NavbarLink } from 'flowbite-react'
import { HiShoppingCart } from "react-icons/hi";
import React, { useState } from 'react'
import { COMPANY_NAME, LOGO } from '../constaint/constaint'
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer';

const links = [
  { link:"/" , text:"Home"},
  { link:"/about" , text:"About"},
  { link:"/service" , text:"Service"},
  { link:"/contact" , text:"Contact"},
];

function MyNavbar({ cart , setCart }) {
const [isOpen , setIsOpen] = useState(false);

function toggalOpen() {
  setIsOpen(!isOpen);
}

  return (
    <>
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={LOGO} className="mr-3 h-6  sm:h-9" alt="Flowbite React Logo" />
        <span className="font-[cursive] text-teal-700 text-2xl self-center whitespace-nowrap font-semibold ">{COMPANY_NAME}</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button gradientDuoTone="greenToBlue" onClick={toggalOpen}>
          <span className="flex items-center gap-2"> 
             <HiShoppingCart className="text-xl"/>
            <span>Buy Now</span>
          </span>
        
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
        {links.map((value) => {
          return (
            <NavbarLink as={Link} to={value.link} >
              {value.text}
            </NavbarLink>
          )
        })}
      </Navbar.Collapse>
    </Navbar>
    <CartDrawer isOpen={isOpen} toggalOpen={toggalOpen} cart={cart} setCart={setCart}/>
    </>
  )
}

export default MyNavbar