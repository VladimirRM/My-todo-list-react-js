import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo('')
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

      {todos?. length > 0 ? (<ul>
       <li>
        {todo}
       </li>

      </ul>):(<div>
        <p>Task not found</p>
      </div>)}
    </div>
  );
};

export default App;
