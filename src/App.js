import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (text) => {
       const newTodo = todos.filter(todo=>{
        return todo !==text
       } )
       setTodos(newTodo)

    return todo;
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos?.length > 0 ? (
        <ul>
          {todos.map((todo, id) => (
            <div>
              <li key={todo}>{todo}</li>
              <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;
