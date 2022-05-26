import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Ch = forwardRef((props,ref)=> {
    const [count , setCount] = useState(0)
    useImperativeHandle(ref,({
        handleClick
    }))
    function handleClick(){
        setCount(count+1)
    }
  return (
    <div>
           {count}
        <button onClick={handleClick}>Child Click</button>
        
        </div>
  )
})

export default Ch