import React, { useState } from 'react'

 function Test() {
const [count,setCount] = useState(0)
const [name,setName] = useState('increment')

   const increment = () => {
    setCount(prevcount=>prevcount + 1)
   }
const decrement = () => {
    setCount(prevcount=>prevcount - 1)
}
  return (

    <div>
        {name} <br />
        <button onClick={()=>increment()}>+</button>{count}<button onClick={()=>decrement()}>-</button>
        </div>
  )
}
export default Test; 