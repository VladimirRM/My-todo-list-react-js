import React,{useState} from 'react'

const App = () => {

    const [todos,setTodos ]= useState([])
    const [userInput,setUserInput]=useState('')


    const addTodo =()=>{

    }
    const handleSubmit =()=>{
         
    }
  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
           <input type='text'
           onChange={handleChange}
           value={userInput}
           placeholder="Enter task" />  
        </form>
    </div>
  )
}

export default App