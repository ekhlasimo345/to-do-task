import { useState } from 'react'


function Counter({label})

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
