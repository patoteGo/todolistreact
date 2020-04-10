import React, { useState } from 'react'

import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
function Todo( {todo, toggleCompleted, removeTodo}) {

    function HandleRemove() {
        removeTodo(todo.id)
    }

    return (
        <ListItem id={todo.id} className={todo.completed ? 'completed' : ''}>
        
        <Checkbox type="checkbox" onClick={()=>toggleCompleted(todo.id)}/>
        <Typography variant="body1" style={{textDecoration: todo.completed ? 'line-through' : null}} >{todo.task}</Typography>
        <IconButton variant="contained" color="primary" onClick={HandleRemove} style={{ display : 'inline' }}>
            <CloseIcon/>
        </IconButton>
       
        
        
        </ListItem>
    )
}

export default Todo;