import React, { useState } from "react";

import Tasks from "./components/Tasks";
import './app.css';
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";

const App = () => { 
  // const message = 'Hello World!'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title:'Estudar Programação',
      complete: false,
    },
    {
      id: '2',
      title:'Ler Livros',
      complete:true,
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        complete: false,
      }];

      setTasks(newTasks);
  }

 return (
          <>
            <div className="container">
              <AddTask handleTaskAddition = {handleTaskAddition}/>
              <Tasks tasks = {tasks}/>
            </div>
          </>
        )
}

export default App;
