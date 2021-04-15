
import AddToto from './AddTodo';
import './App.css';
import Header from './Header';
import Todos from './Todos';
import { useState } from "react"

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1, 
      description: "Manger",
      done: false
    },
    {
      id: 2, 
      description: "Dormir",
      done: false
    },
    {
      id: 3, 
      description: "Courrir",
      done: false
    },
  ])


  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = {id, done:false,...todo}
    setTodos([...todos, newTodo])

  }

  const isChecked = (id) => {
    setTodos(todos.map((todo) => todo.id === id? {...todo, done: !todo.done}: todo))
  }
  
  //Delete Todo

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }


  return (
    <div className="app">
      <div className="container">
        <Header/>
        <AddToto addTodo={addTodo}/>
        {todos.length > 0 ? <Todos todos={todos} isChecked={isChecked} deleteTodo={deleteTodo}/>: "No ToDo"}
        
        
      </div>
    </div>
  );
}

export default App;
