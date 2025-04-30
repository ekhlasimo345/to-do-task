import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={e => setCount(count +1 )}> + </button>   
        <span>{count}</span>
        <button onClick={e => setCount(count -1)}> - </button>   


    </div>
  )
}

export default Counter
