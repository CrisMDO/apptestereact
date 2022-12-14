import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, sentInputData] = useState('');

    const handleInputChange = (e) => {
        sentInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        sentInputData ('');
    }
    return ( 
        <div className='add-task-container'>
            <input onChange={handleInputChange}
            value = {inputData}
            className='add-task-input'
            type="text" />
            <div className='add-task-button-container'>
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
            
        </div>
      
            
           
        
    );
}
 
export default AddTask;