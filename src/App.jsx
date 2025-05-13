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


  const [newTask,setNewTask]=useState("") 
  const [allTodos,setAllTodos]=useState(initialToDos) 



  function submitNewTodo(e){
    e.preventDefault()
    if (newTask !==""){
      let newTodos= allTodos.concat({
        id: allTodos.length + 1,
        task: newTask,
        completed: false,
      })
      
      setAllTodos(newTodos)
      setNewTask("")
    } 
   
  }
  function handleCheck(todoId){
    setAllTodos(allTodos.map(todo => todo.id=== todoId ? {...todo, completed: !todo.completed} :todo))
    
    
  }
 

  return (
    <>
      <h1>My To do List</h1>
      <form onSubmit={submitNewTodo}>
        <input type="text" placeHolder="write here..." value={newTask} onChange={e => setNewTask(e.target.value) }></input>
        <button class="submit-btn" type="submit">submit</button>
      </form>
      <ul>
      {allTodos.map(todo =>(
        <li>
          <input type ="checkbox" onChange={() => handleCheck(todo.id)}

        checked={todo.completed}
        
        
        ></input>
          {todo.task} 
        </li>
        
      )
      )}
      </ul>
    </>
  )

}

export default App;
