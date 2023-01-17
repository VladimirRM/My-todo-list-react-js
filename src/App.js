import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);



  const addTodo =()=>{
      
  }
  return (
    <div>
      <input
        type="text"
        value={todo}
        placeholder="Enter something"
        onChange={(e) => setTodos(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};

export default App;
