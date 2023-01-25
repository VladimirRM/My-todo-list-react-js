import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

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
      {todos.map(input=>(
        <li>
          {input.title}
          {edit.id===id ?
          <div>
     <input type="text" 
     onChange={(e)=>setValue(e.target.value)}
     value={value}
     />
          </div>:
          <div></div>
          }
          {input.id===id ?
          <div></div>:
          <div></div>
          }
         

        </li>
      ))}
    </ul>
    </div>
  );
};

export default App;
