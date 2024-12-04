import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [input , setInput] = useState("");
    const countRef = useRef(0);
    const inputRef = useRef("");
    // console.log("ref" , countRef);

    console.log("renderd");

    useEffect(() => {
        countRef.current++;
        inputRef.current = input;
        console.log("inputRef" , inputRef.current);
        console.log("countref" ,countRef.current);
    } ,[input])

    function handleChange(e) {
        setInput(e.target.value);
        
    }

  return (
    <div className='p-8'>
      <h2>UseRef Example:</h2>
        <input  type='text' className="rounded-md" value={input} onChange={handleChange}/>
        <p>Prev-Value:{inputRef.current}</p>
        <p>Render-Count:{countRef.current}</p>
    </div>
  )
}

export default UseRef