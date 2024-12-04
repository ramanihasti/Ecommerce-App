import React, { useCallback, useState } from 'react'
import Counter from './Counter'
import Todos from './Todos';

function Memo() {
    const [count , setCount] = useState(0);
    const [list , setList] = useState(["Task 1", "Task 2"])

    const handleAddToTask = useCallback(function () {
      setList([...list, `Task ${list.length + 1}`])
    }, [list])

    // function handleAddToTask() {
    //     setList([...list, `Task ${list.length + 1}`])
    //   }

    console.log("memo render")
  return (
    <div>
      <h1>Memo & useCallBack Example:</h1>
        <Counter count={count} setCount={setCount} />
        <Todos list={list} handleAddToTask={handleAddToTask}/>
    </div>
  )
}

export default Memo