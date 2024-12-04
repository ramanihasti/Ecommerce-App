import { Button } from 'flowbite-react'
import React, { memo } from 'react'
import {HiPlus , HiMinus } from "react-icons/hi"

function Counter({count , setCount}) {

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleDecrease() {
        setCount(count - 1);
    }
    console.log("counter rendered")

  return (
    <div className="flex items-center gap-4 justify-center p-12">
        <div className="flex items-center gap-4 rounded-md border border-neutral-500 p-8">
        <Button>
            <HiMinus onClick={handleDecrease}/>
        </Button>
        <p className="font-semibold text-xl">{count}</p>
        <Button >
            <HiPlus onClick={handleIncrease}/>
        </Button>
        </div>
    </div>
  )
}

export default memo(Counter)