import React, { useEffect, useState } from 'react'

function Effect() {
    const [content,setContent] = useState('posts')
    const [count,setCount] = useState(0)
    const [items,setItems] = useState([])
    useEffect(()=>{
        console.log('componentDidUpdate')
    },[])
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/'+content)
        .then(response => response.json())
        .then(json => setItems(json))



        console.log('componentDidMount')
        return ()=>{
            //cleaning code
            console.log('Unmount')
        }
    },[content])

  return (

    <div>
         <button onClick={()=>setCount(count+1)}>count {count}</button>
        <button onClick={()=>setContent('posts')}>posts</button>
        <button onClick={()=>setContent('users')}>users</button>
        <button onClick={()=>setContent('comments')}>comments</button>

        <h1>{content}</h1>
        <ul>
            {items && items.map(item=>{
              return  <li key={items.id}>{item.id}</li>
            })}
        </ul>
        
        
        </div>
  )
}

export default Effect;