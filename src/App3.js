// import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // const addTodo = () => {
  //    const newTodo = todo ;
  //    setTodoList([...todoList, newTodo])
  //   setTodo("");
  // };
  // const addTodo = () => {

  //    setTodoList([...todoList, {
  //     id:Math.random(),
  //     item:todo,
  //    }])
  //   setTodo("");
  // };

  const addTodo = ()=>{
    setTodoList([...todoList,todo])
    setTodo('')
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>Add todo</button>

      {todoList.map((item) => (
        <ul>
          <li key={todo.toString()}>
            {todo}
            <button>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

// export default App;
