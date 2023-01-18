import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
    }
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
    </div>
  );
};

export default App;
