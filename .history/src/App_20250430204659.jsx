import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialToDos=[
  {
    id: 1 ,
    task:"learn react",
    completed: true ,
  },
  {
    id: 2 ,
    task:"coocking",
    completed : false,
  },
  {
    id: 3,
    task:"driving",
    completed: true,
  }
]

function App() {

  return (
    <>
      <h1>My To do List</h1>
      <ul>
      {initialToDos.map(todo =>(
        <li>
          {todo.task}
        </li>
      )

      )}
      </ul>
    </>
  )
}

export default App
