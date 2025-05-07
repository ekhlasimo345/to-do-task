import { useState } from 'react'


function Counter({label}){
    const [count,setCount]=useState(0)

  return (
    <div>
        <h2>{label}</h2>
        <button onClick={e => setCount(count +1 )}> + </button>   
        <span>{count}</span>
        {/* <button style={{cursor : count ===0 ? "not-allowed" :"pointer" }}  disabled={count ===0} onClick={e => setCount(count -1)}> - </button>    */}
        <button className={count ===0 ? 'button-disabled': 'button-active'} disabled={count ===0} onClick={e => setCount(count -1)}> - </button>   

    </div>
  )
}
console.log("hello world")
export default Counter
