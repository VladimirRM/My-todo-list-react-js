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
  const saveTodo = (id) => {
    const newTodo = [...todos].map((input) => {
      if (input.id === id) {
        input.title = value;
      }
      return input;
    });
    setTodos(newTodo);
    setEdit(null);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodo}>Add task</button>
      <ul>
        {todos.map(input, (id) => (
          <li>
            {edit.id === id ? (
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            ) : (
              <div>{input.title}</div>
            )}
            {edit.title ? (
              <div>
                <button onClick={() => deleteTodo(input.id)}>Delete</button>
                <button onClick={() => editTodo(input)}>Edit</button>
                <button onClick={() => saveTodo(input)}>Save</button>
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
