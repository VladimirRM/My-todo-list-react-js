import React,{useState} from 'react'

const App = () => {
const [input,setInput]= useState('')
const [todos,setTodos]= useState([])


  return (
    <div>
     <input type="text"
     onChange={(e)=>setInput(e.target.value)}
     value={input} />


    </div>
  )
}

export default App