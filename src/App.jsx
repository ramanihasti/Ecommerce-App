import React, { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyLayout from './components/layout/MyLayout'
import { Flowbite } from 'flowbite-react';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const customTheme = {
    button: {
      gradientDuoTone: {
        primary: "bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",
      },
    }
  };

  const [cart, setCart] = useState([]);

  return (
    <>
      <Provider store={store}>
        <Flowbite theme={{ theme: customTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MyLayout cart={cart} setCart={setCart} />}>
                <Route index element={<Home cart={cart} setCart={setCart} />} />
                <Route path="products/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Flowbite>
      </Provider>
    </>
  )
}

export default App