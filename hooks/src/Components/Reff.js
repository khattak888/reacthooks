//dom element ko access karna hai ya manipulate karna hai to hmm functional component me useref ka use karte hai
import React, {useRef} from 'react'

function Reff() {
    const inputRef = useRef()
   function handleRef (){
       console.log(inputRef,'handleRef')
       inputRef.current.focus()
       inputRef.current.value = "abc"
       inputRef.current.style.color = "red"
   }
  return (
    <div>
        
        <input ref={inputRef} type = "text" />
        <button onClick={handleRef}>Click Here</button>
        
        
        </div>
  )
}

export default Reff