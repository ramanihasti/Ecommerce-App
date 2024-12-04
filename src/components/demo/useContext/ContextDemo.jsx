import React, { createContext, useState } from 'react'
import ComponentA from './ComponentA'

export const userContext = createContext()

function ContextDemo() {
    const [user , setUser] = useState("Hasti")

  return (
    <userContext.Provider value={user}>
        <ComponentA />
    </userContext.Provider>
    
  )
}

export default ContextDemo