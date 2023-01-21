import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

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
  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    const edit = input;
    setInput(
      todos.map((input) => {
        if (edit.id === id) {
          edit.input = input;
        }
        return edit;
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((input,id) => (
          <li key={input.id}>
            {input.title}
            <button onClick={() => removeTodo(input.id)}>Delete</button>
            <button onClick={() => editTodo(input.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
