// import React,{useState} from 'react'

const App = () => {

    const [todos,setTodos ]= useState([])
    const [userInput,setUserInput]=useState('')


    const addTodo =()=>{

    }
    const handleSubmit =()=>{
         
    }
    const handleChange =()=>{
         
    }
  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
           <input type='text'
           onChange={handleChange}
           value={userInput}
           placeholder="Enter task" /> 
           <button>Save</button> 
        </form>
    </div>
  )
}

// export default App