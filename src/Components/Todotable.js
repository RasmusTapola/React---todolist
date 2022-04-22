import React , {useState} from 'react';

export default function Todotable(props) {
    
    return(
        <div>
        <table>
            <tbody>
                    <tr>
                    <th>Description:</th>
                    <th>Date:</th>
                    <th>Priority:</th>
                    </tr>
                    
                    
                    {
                    props.todos.map((todo, index) =>
                        <tr key={index}>                           
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                            <td>{todo.priority}</td>
                            <td><input type="button" value="Delete" onClick={()=>props.setTodos(props.todos.filter((todo, i)=> i !== index))}></input></td>
                    </tr>
                        )
                    }
                </tbody>
          </table>
        </div>
    );
}