import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
     return(
      <div>
        <input type="text"
        placeholder="Enter something" 
        onChange={(e)=>setTodo(e.target.value)}/>
      </div>
     )
 
  };



export default App;
