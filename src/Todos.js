import React from 'react'
import Todo from './Todo'

function Todos({todos, deleteTodo, isChecked}) {
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} isChecked={isChecked} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}

export default Todos
