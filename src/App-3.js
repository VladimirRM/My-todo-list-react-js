// import React, { useState } from "react";
// import "./index.css";
// import { v4 as uuidv4 } from "uuid";
// import Button from "react-bootstrap/Button";

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
  console.log("index");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button variant="info" onClick={addTodo}>
        Add
      </Button>
      <ul>
        {todos.map((input, index) => (
          <li key={index}>
            {edit === input.id ? (
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
            {edit === input.id ? <div></div> : <div></div>}
            {input.title ? (
              <div>
                <Button variant="info" onClick={() => removeTodo(input.id)}>
                  Delete
                </Button>
                <Button
                  variant="info"
                  onClick={() => editTodo(input.id, input.title)}
                >
                  Edit
                </Button>
                <Button variant="info" onClick={() => saveTodo(input.id)}>
                  Save
                </Button>
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

// export default App;
