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
      title:input,
    }
    setTodos([...todos,newTodo])

}
const deleteTodo =(id)=>{
     setTodos(todos.filter(input=>input.id !==id))
}
const editTodo =(id)=>{
     setTodos(todos.filter(input=>input.id !==id))
}
const saveTodo =(id)=>{
     setTodos(todos.filter(input=>input.id !==id))
}


  return (
    <div>
      <input type="text"
      onChange={(e)=>setInput(e.target.value)}
      value={input} />
      <button onClick={addTodo}>Add task</button>

        {todos.map(input,index=>(
             <ul>
              <li key={index}>{input.title}</li>
             </ul>
        ))}

      <button onClick={()=>deleteTodo(input.id)}>Delete</button>
      <button onClick={()=>editTodo(input,id)}>Edit</button>
      <button onClick={()=>saveTodo(input,id)}>Save</button>

    </div>


  )
}

export default App