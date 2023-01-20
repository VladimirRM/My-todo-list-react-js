import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  const 

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      {todos.map(item, (i) => (
        <ul>
          <li key={item.i}>{input}</li>
        </ul>
      ))}
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default App;
