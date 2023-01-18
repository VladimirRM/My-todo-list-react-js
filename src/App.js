import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState("");

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  const handleRemove = (id) => {
    const newTodo = [...todos].filter(todo, (id) => todo.id !== id);
    setTodos(newTodo);
  };
  const handleEdit = (id) => {
    setTodos(todos.map((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter something"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, id) => (
        <ul>
          <div>
            <li key={todo.id}>
              {todo}
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleRemove(todo.id)}>Delete</button>
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default App;
