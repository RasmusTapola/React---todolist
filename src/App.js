import React from 'react';
import './App.css';
import Todolist from './Components/Todolist';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function App() {
    
    return (
        <div className="App">
            <Todolist/>
            
            
    </div>
  );
}

export default App;
