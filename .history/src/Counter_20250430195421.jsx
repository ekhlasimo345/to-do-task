import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button> + </button>   
        <span>count</span>
        <button> - </button>   


    </div>
  )
}

export default Counter
