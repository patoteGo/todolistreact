import React, { useState } from 'react'
import { render } from '@testing-library/react'
import Todo from './Todo'
import { List } from '@material-ui/core/';
function Todolist( { todos, toggleCompleted, removeTodo }){

    return ( 
        <List>
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
                ))
            }
        </List>
    )
}

export default Todolist;