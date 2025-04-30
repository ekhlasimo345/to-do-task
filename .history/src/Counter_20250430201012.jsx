import { useState } from 'react'


function Counter({label}){
    const [count,setCount]=useState(0)

  return (
    <div>
        <h2>label</h2>
        <button onClick={e => setCount(count +1 )}> + </button>   
        <span>{count}</span>
        <button onClick={e => setCount(count -1)}> - </button>   
        

    </div>
  )
}

export default Counter
