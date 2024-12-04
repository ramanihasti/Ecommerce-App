import { Button } from 'flowbite-react'
import React, { memo } from 'react'

function Todos({list ,handleAddToTask}) {


console.log("List render")

  return (
    <div className="flex items-start justify-center gap-2 px-12">
      <div className="border border-neutral-600 rounded-md gap-3 p-4">
      <ul>
        {list.map((value , index) => {
          return <li key={index} className="font-[italic] text-neutral-800">{value}</li>
        })}
       
      </ul>
      <Button onClick={handleAddToTask} className='mt-6'>Add to Task</Button>
      </div>
    </div>
  )
}

export default memo(Todos)