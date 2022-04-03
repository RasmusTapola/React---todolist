import React , {useState} from 'react';
import Todotable from './Todotable';

export default function Todolist (){
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
   

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]:event.target.value });
    }

    const addTodoList = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }
    return(
        <div>
            <h1>Todo list</h1>
            <form onSubmit={addTodoList}>

                Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}></input>
                Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}></input>
                    <input type="submit"></input>
            </form>
            <Todotable todos={todos} setTodos={setTodos}/>
        </div>
    )
}