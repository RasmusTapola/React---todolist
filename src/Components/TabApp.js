import React, {useState} from 'react';
import Tab  from '@mui/material/Tab';
import  Tabs  from '@mui/material/Tabs';

function TabApp(props){
   
    return(
        <div>
            <Tabs value={props.value} onChange={props.handleChange}>
                <Tab value="one" label="Home"/> 
                <Tab value="two" label="Todos"/>  
                 
                
            </Tabs>
            
        </div>
    );
}

export default TabApp;