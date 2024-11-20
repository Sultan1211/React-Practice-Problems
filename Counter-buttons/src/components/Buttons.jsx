import React, { useState } from 'react'

function Buttons() {
    const [count,setCount] = useState(0);
    const increment = () => {setCount(e=>e+1)}
    const decrement = () => {setCount(e=>e-1)}
  return (
    <div>
        <div><button onClick={increment}>Increment</button></div>
        <div><button onClick={decrement}>Decrement</button></div>
        <div>{count}</div>
    </div>
  )
}

export default Buttons