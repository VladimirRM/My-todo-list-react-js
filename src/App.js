import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  const handleRemove = () => {};
  const handleEdit = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Enter something"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo,id) => (
        <ul>
          <li key={todo.id}>
            {todo}
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleRemove(todo.id)}>Add todo</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
