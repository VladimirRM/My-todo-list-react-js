import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [input,setInput]= useState('')
  const [todos,setTodos]= useState([])
  const [edit,setEdit]= useState(null)
  const [value,setValue]= useState('')

const addTodo=()=>{
    const newTodo = {
      id:uuidv4(),
      item:input,
    }

}


  return (
    <div>
      <input type="text"
      onChange={(e)=>setInput(e.target.value)}
      value={input} />
      <button onClick={addTodo}>Add task</button>
      <button onClick={()=>deleteTodo(input.id)}>Delete</button>

    </div>


  )
}

export default App