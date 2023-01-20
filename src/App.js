import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
 setTodos([...todos, input])
     setInput('')
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((input, index) => (
        <ul>
          <div>
            <li key={input.index}>{input}</li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default App;
