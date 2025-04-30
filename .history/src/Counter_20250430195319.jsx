import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button> + </button>   
        <button> - </button>   


    </div>
  )
}

export default Counter
