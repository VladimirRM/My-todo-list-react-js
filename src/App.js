import React,{useState} from 'react';
import './App.css';

function App() {
  const [todo,setTodo]= useState('')
  const [todos,setTodos]= useState('')
  return (
    <div className="App">

      <input type="text" />
      <button></button>
   
    </div>
  );
}

export default App;
