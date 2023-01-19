import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodolist(e.target.value)}
        value={todo}
      />
      
    </div>
  );
};

export default App;
