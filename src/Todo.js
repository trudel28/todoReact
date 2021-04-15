import React from 'react'
import "./Todo.css"
import { RiDeleteBin6Line } from "react-icons/ri"

function Todo({todo,  deleteTodo, isChecked}) {
    return (
        <div className="todo">
            <div className="left">
                <input type="checkbox" checked={todo.done} onClick={() => {isChecked(todo.id)}}/>
                {todo.done? <p className="done">{todo.description}</p>:<p>{todo.description}</p>}
            </div>
           
            <RiDeleteBin6Line color="red" onClick={() => {deleteTodo(todo.id)}}/>
        </div>
    )
}

export default Todo
