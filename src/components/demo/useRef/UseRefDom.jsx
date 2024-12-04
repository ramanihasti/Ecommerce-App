import React, { useEffect, useRef } from 'react'

function UseRefDom() {
    const divRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            // console.log("current" , current);
            divRef.current.style.backgroundColor = "rosybrown";
        } , 2000);
    }  ,[]);

  return (
    <>
    <h1>UseRef DoM Manipulation Example:</h1>
    <div ref={divRef} id="mydiv" className='p-6 text-center font-[cursive] text-xl'>Hello Guys !</div>
    </>
  )
}

export default UseRefDom