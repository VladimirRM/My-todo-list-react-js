import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodos("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        placeholder="Enter something"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos?.length > 0 ? (
        <ul>{todos.map((todo, (id) => <li key={todo.id}>{todo}</li>))}
        
        </ul>
      ) : (
        <div>
          <p>Task not found</p>
        </div>
      )}
    </div>
  );
};

export default App;
