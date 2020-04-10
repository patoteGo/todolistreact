import React, { useState, useEffect } from 'react';
import './App.css';
import Todolist from './Components/Todolist.jsx'
import Todoform from './Components/Todoform.jsx'
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = 'react-todo-list';

function App() {

  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(todos){
      setTodos(storageTodos)
    }
  }, []);

  useEffect(() => {
    //efect
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
    return() => {

    }
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleCompleted(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo; 
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter((todo) => { return todo.id !== id }))
  }


  return (
    <div className="container">
      <div className="App">
        <Typography variant="h5" style={{ padding: 16 }}>Todo list</Typography>
        
        <Todoform addTodo={addTodo} />
        <Todolist todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
      </div>
    </div>
  );
}

export default App;
