import { Button } from 'flowbite-react';
import React, { useMemo, useState } from 'react'

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function UseMemoDemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    // const calculation = expensiveCalculation(count);

    const calculation = useMemo(() => {
      console.log("count" , count);
      return expensiveCalculation(count);
    } , [count]);  


    const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        console.log("t" , todos);
        setTodos((t) => [...t, "New Todo"]);
      };

  return (
    <div>
      <h2>UseMemo Example:</h2>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <Button onClick={addTodo}>Add Todo</Button>
      </div>
      <hr />
      <div>
        Count: {count}
        <Button onClick={increment}>+</Button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}

export default UseMemoDemo