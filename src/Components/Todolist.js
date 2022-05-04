import { AgGridReact } from 'ag-grid-react';
import React , {useState, useRef} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import TabApp from './TabApp';

export default function Todolist (){
    const [todo, setTodo] = useState({ desc: '', date: '' , priority: ''});
    const [todos, setTodos] = useState([]);
    const [SelectedDate, setSelectedDate] = useState (new Date());
    const [value, setValue] = useState ('one');
    const gridRef = useRef();

    const handleChange = (event, value) =>{
        setValue(value);
    }

    const dateChanged = (date) => {
        setSelectedDate(date)
        setTodo({...todo, date:(date, SelectedDate)})
    }

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
            <TabApp
                value={value}
                handleChange={handleChange}
            />
            {value === 'one' && <h2>Welcome to Todo list app!</h2>}
            {value === 'two' && <div>

            <form onSubmit={addTodoList}>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField label="Description" variant="standard" name="desc" value={todo.desc} onChange={inputChanged}>
                </TextField>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                variant='inline'
                format='dd/mm/yyyy'
                margin='normal'
                id='date-picker'
                name='date'
                label='Date Picker'
                value={SelectedDate}
                onChange={dateChanged}></DatePicker>
                </MuiPickersUtilsProvider>
                <TextField label="Priority" variant="standard" name="priority" value={todo.priority} onChange={inputChanged}>
                </TextField>    
                <Button onclick={deleteTodo} variant="contained" >Delete</Button>
                <Button type="submit" onClick={addTodoList} variant="contained" >Add</Button>
                </Stack>
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
            </div>}
            
            
        </div>
    )
}