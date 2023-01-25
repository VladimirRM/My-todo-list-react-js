import React,{useState} from 'react'

const App = () => {
   const [input,setInput]=useState('')
   const [todos,setTodos]=useState([])

   const  addTodo =()=>{
      const newTodo ={
        id:Math.random(),
        title:input,
      }
      setTodos([...todos,newTodo])
      setInput('')
   }
   const deleteTodo =()=>{

   }
   const editTodo =()=>{

   }
   const saveTodo =()=>{

   }

  return (
    <div>
      <input type="text"
      onChange={(e)=>setInput(e.target.value)}
      value={input} />
      <button onClick={addTodo}>Add</button>
      
    </div>
  )
}

export default App
