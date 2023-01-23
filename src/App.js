import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([{ text: "" }]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

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
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((input, id) => (
          <li key={input.id}>
            {edit === input.id ? (
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                                 {/* <button onClick={() => removeTodo(input.id)}>Delete</button>
                <button onClick={() => editTodo(input.id, input.title)}>
                  Edit
                </button> */}
              </div>
            ) : (
              <div key={input.id}> {input.title}</div>
            )}
            {edit === input.id ? (
              <div key={input.id}> 
                <button onClick={() => saveTodo(input.id)}>Save</button>
              </div>
            ) : (
              <div key={input.id}>
          
              </div>
            )}
            {input.title ? (
              <div key={input.id}>
                <button onClick={() => removeTodo(input.id)}>Delete</button>
                <button onClick={() => editTodo(input.id, input.title)}>
                  Edit
                </button>
              </div>
            ) : (
              <div
              key={input.id}></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
