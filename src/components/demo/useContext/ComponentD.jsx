import React, { useContext } from 'react'
import { userContext } from './ContextDemo'

function ComponentD() {
    const value = useContext(userContext);
  return (
    <div>Hello {value}</div>
  )
}

export default ComponentD