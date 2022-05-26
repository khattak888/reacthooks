import React,{useRef} from 'react'
import Ch from './Ch'

function P() {
    const ref = useRef()
  return (
    <div>
        <Ch ref={ref}/>
        <button onClick={()=>ref.current.handleClick()}>Parent Click</button>
        </div>
  )
}

export default P