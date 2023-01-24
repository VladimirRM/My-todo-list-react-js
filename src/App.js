import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: input,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map(input=> (
          <li key={uuidv4()} >{input.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
