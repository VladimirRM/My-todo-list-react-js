import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([{text:''}]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');


  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      title: input,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  // const removeTodo = (id) => {
  //   const newTodo = todos.filter((input) => input.id !== id);
  //   setTodos(newTodo);
  // };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  // const editTodo = (id) => {
    //   const text = prompt("enter text:");
    //   setTodos(
      //     todos.map((obj, id) => {
        //       if (todos.id === id) {
          //         obj.text = text;
          //       }
          //       return obj;
          //     })
          //   );
          // };
          
          // const editTodo = (id) => {
         
          // };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((input, id) => (
          <li key={input.id}>
            {input.title}
            {edit === id ? 
            <div>
              <input type="text"
              value={value} />
              <button>Save</button>
            </div>:<div>
              </div>}
            <button onClick={() => removeTodo(input.id)}>Delete</button>
            <button onClick={() => editTodo(input.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
