import React from 'react'
import "./AddTodo.css"
import { useState } from "react" 

function AddTodo({addTodo}) {

    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if(!description){
            alert("please add a task")
            return
        }
        addTodo({description})
        
    }


    return (
        <div className="addtodo">
            <input type="text" placeholder="Add Todo" onChange={(e)=>setDescription(e.target.value)} />
            <button type="submit" onClick={onSubmit}>Add</button>
        </div>
    )
}

export default AddTodo
