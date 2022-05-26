import React, { createContext } from 'react'
import B from './B';
const FirstName = createContext()
const LastName = createContext()


function A(props) {
  return (
    <div>
        <FirstName.Provider value="khattak">
            <LastName.Provider value="bilal">
        <B />
        </LastName.Provider>
        </FirstName.Provider>
       
        </div>
  )
}
export default A;
export {FirstName,LastName}