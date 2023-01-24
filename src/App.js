import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: input,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((input) => input.id !== id));
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };
  const saveTodo = (id, title) => {


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
        {todos.map(input => (
          <li key={uuidv4()}>
            {edit === input.id ? (
              <div>
                <input
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </div>
            ) : (
              <div>
                {input.title}
              
                </div>
            )}
            {input.title ? (
              <div>
                  <button onClick={() => deleteTodo(input.id)}>Delete</button>
                <button onClick={() => editTodo(input.id,input.title)}>Edit</button>
                <button onClick={() => saveTodo(input.id)}>Save</button>
              
              </div>
            ) : (
              <div></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
