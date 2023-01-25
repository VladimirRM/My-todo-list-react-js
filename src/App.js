import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState("");
  const [input, setInput] = useState([]);


  const addTodo=()=>{
    const newTodo = {
      id:Math.random(),
      title:input,
    }
    setTodos([...todos,newTodo])
    setInput('')
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
      {todos.map(input =>(
        <li></li>
        ))}
        </ul>
    </div>
  );
};

export default App;
