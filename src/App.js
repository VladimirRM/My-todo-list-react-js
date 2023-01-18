import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const handleRemove
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

      {todos.map(todo,id => (
        <ul>
          <li>{todo}</li>
          <button onClick={handleRemove}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </ul>
      ))}
    </div>
  );
};

export default App;
