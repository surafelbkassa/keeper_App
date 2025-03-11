import React, { useState } from 'react'
import Form from './Components/Form'; // Correctly importing the default export
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    console.log(task); // Debugging line
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  return (
    <div>
    <div className='header'>
        <h2>Task manager</h2>
      </div>
    <div className='container'>
      
      <Form addTask={addTask} />
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <h3>{task.taskName}</h3>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default App;
