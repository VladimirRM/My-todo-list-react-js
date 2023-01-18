import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

const addTodo=()=>{

}
  const handleRemove =()=>{
    
  }
  const handleEdit =()=>{

  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter something"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>Add todo</button>
        {todos.map(todo=>(
          <ul>
            <li key={todo.id}>
                
              {todo}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={addTodo}>Add todo</button>

              
            </li>
          </ul>
        ))}

    </div>
  );
};

export default App;
