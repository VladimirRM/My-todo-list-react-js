import React,{useState} from 'react'

const App = () => {

   const [input,setInput]=useState('')
   const [todos,setTodos]=useState([])

   const addTodo =()=>{
        const newTodo = {
          id:Math.random(),
          title:input
        }
        setTodos(newTodo)
        setInput('')
   }
  return (
    <div>
      <input type="text"
      onChange={(e)=>setTodos(e.target.value)} 
      value={input}/>
      <ul>


        
       {todos.map(input=>(
        <li>{todos}</li>

        ))}
        </ul>


    </div>
  )
}

export default App