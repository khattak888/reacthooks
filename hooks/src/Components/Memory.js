//usememo hooks
//counter example

import React, { useMemo, useState } from 'react'


 function Memory() {
     const [countone,setCountone] = useState(0)
     const [counttwo,setCounttwo] = useState(0)

     function increment(){
         setCountone(countone + 1)
     }
     function decrement(){
         setCounttwo(counttwo - 1)
     }
     const isEven = useMemo(()=>{
         for(let i=0;i<100000000;i++){}
      return countone%2===0
         
     },[countone])


  return (
    <div>
        
        <button onClick={increment}>Count one {countone}</button>
        {isEven?'Even' : 'Odd'} <br />
        <button onClick={decrement}>Count two {counttwo}</button>
        </div>
  )
}
export default Memory;