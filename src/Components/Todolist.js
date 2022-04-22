import { AgGridReact } from 'ag-grid-react';
import React , {useState, useRef} from 'react';
import Todotable from './Todotable';

export default function Todolist (){
    const [todo, setTodo] = useState({ desc: '', date: '' , priority: ''});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();
   

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]:event.target.value });
    }

    

    const columns =[
        {headerName: 'Date', field: 'date', sortable:true, filter:true, floatingFilter:true},
        {headerName: 'Desc', field: 'desc', sortable:true, filter:true, floatingFilter:true},
        {headerName: 'Priority', field: 'priority', sortable:true, filter:true, floatingFilter:true, 
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}

    ]

    const addTodoList = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);

    }
        const deleteTodo = () => {
            if (gridRef.current.getSelectedNodes().length > 0) {
                setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
            }
            else {
                alert('Select a row first!');
            }
        }

    
    return(
        <div>
            <h1>Todo list</h1>
            <form onSubmit={addTodoList}>

                Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}></input>
                Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}></input>
                Priority: <input type="text" name="priority" value={todo.priority} onChange={inputChanged}></input>
                <input type="button" value="Delete" onClick={deleteTodo}></input>
                <input type="submit" value="Add"></input>
            </form>
            
            <div
                className="ag-theme-material"
                style={{
                    height: '1000px',
                    width: '35%',
                    margin: 'auto'}}
                    >
            <AgGridReact
                ref={gridRef}
                onGridReady={params => gridRef.current = params.api}
                rowSelection='single'
                animateRows='true'
                columnDefs={columns}
                rowData={todos}
               > 
            </AgGridReact>
            </div>
            
            
        </div>
    )
}