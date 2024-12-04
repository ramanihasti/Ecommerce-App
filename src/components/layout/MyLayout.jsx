import React from 'react'
import MyFooter from './MyFooter'
import MyNavbar from './MyNavbar'
import { Outlet } from 'react-router-dom'

function MyLayout({ cart , setCart }) {
  return (
    <>
       <MyNavbar  cart={cart} setCart={setCart}/> 
       <Outlet />
       <MyFooter />
    </>
  )
}

export default MyLayout