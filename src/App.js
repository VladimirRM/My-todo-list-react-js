import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

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
              <li key={todo.id}>{todo}</li>
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
