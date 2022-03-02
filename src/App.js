import React, { useState } from 'react';
import './App.css';

function App() {
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
   

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]:event.target.value });
    }

    const addTodoList = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    return (
        <div className="App">
            <h1>Todo List</h1>
            <form onSubmit={addTodoList}>

                Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}></input>
                Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}></input>
                    <input type="submit"></input>
            </form>
            
            <table>
                <tbody>
                    
                    <th>Description:</th>
                    <th>Date:</th>
                    
                    
                    {
                    todos.map((todo, index) =>
                        <tr key={index}>                           
                            <td>{todo.desc}</td>                           
                            <td>{todo.date}</td>    
                    </tr>
                        )
                    }
                </tbody>
          </table>
    </div>
  );
}

export default App;
