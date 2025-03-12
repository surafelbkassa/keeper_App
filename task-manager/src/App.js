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

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <div className='header'>
        <h2>Task manager</h2>
      </div>
      <div className='container'>
        <Form addTask={addTask} />
        <div className='tasks-grid'>
          {tasks.map((task, index) => {
            return (
              <div key={index} id={index} className='task'>
                <div className='task-content'>
                  <h3>{task.taskName}</h3>
                  <p>{task.description}</p>
                </div>
                <button className='btn' onClick={() => deleteTask(index)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
