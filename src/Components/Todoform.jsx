import React, { useState} from 'react';
import uuid from "uuid";
import { Button, TextField } from '@material-ui/core/';
function Todoform({ addTodo }) {
    const [ todo, setTodos ] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleInputChange(e) {
        
        setTodos({ ...todo, task: e.target.value })
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo( { ...todo, id: uuid.v4() });
            //reset
            setTodos({ ...todo, task: ""});
        }
    }

    return ( 
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField 
                label="texto"
                type="text"
                value={todo.task}    
                onChange={handleInputChange}
                placeholder="escribe aquí"
            /> 
            <Button variant="contained" color="primary" type="submit">Enviar</Button>
        </form>
    )
}

export default Todoform;