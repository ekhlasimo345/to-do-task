import { useState } from "react";
const initialToDos = [
  {
    id: 1,
    task: "learn react",
    completed: true,
  },
  {
    id: 2,
    task: "cocking",
    completed: false,
  },
  {
    id: 3,
    task: "driving",
    completed: true,
  },
];

function App() {
  const [newTask, setNewTask] = useState("");
  const [allTodos, setAllTodos] = useState(initialToDos);

  function submitNewTodo(e) {
    e.preventDefault();
    if (newTask !== "") {
      /* Before:
       
      let newTodos = allTodos.concat({
        id: allTodos.length + 1,
        task: newTask,
        completed: false,
      }); 
      This code is valid and works. In React is most typical to use the spread operator to create a new array.
      After:
      */
      let newTodos = [
        ...allTodos,
        {
          id: allTodos.length + 1,
          task: newTask,
          completed: false,
        },
      ];
      setAllTodos(newTodos);

      /* 
      Another way to do this is to use current state to update and add the new task to it.
      setAllTodos((prevState) => [    
        ...prevState,
        {
          id: prevState.length + 1,
          task: newTask,
          completed: false,
        },
      ]); */

      setNewTask("");
    }
  }
  function handleCheck(todoId) {
    setAllTodos(
      allTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <section className={"block__flex"}>
      <h1>My To do List</h1>
      <form onSubmit={submitNewTodo}>
        <input
          type="text"
          placeholder="write here..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></input>
        <button className="submit-btn" type="submit">
          submit
        </button>
      </form>
      <ul>
        {allTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(todo.id)}
              checked={todo.completed}
            />
            {/* strikes out todo item when is checked */}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            {/* {todo.task} */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
