import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa'; // Import Font Awesome icons

const App = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prevTasks) => [...prevTasks, { ...task, completed: false }]);
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== id));
  }

  function editTask(id) {
    const taskToEdit = tasks[id];
    const updatedTaskName = prompt("Edit Task Name:", taskToEdit.taskName);
    const updatedDescription = prompt("Edit Description:", taskToEdit.description);

    if (updatedTaskName !== null && updatedDescription !== null) {
      setTasks((prevTasks) =>
        prevTasks.map((task, index) =>
          index === id ? { ...task, taskName: updatedTaskName, description: updatedDescription } : task
        )
      );
    }
  }

  function toggleTaskCompletion(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div>
      <div className="header">
        <h2>Task Manager</h2>
      </div>
      <div className="container">
        <Form addTask={addTask} />
        <div className="tasks-grid">
          {tasks.map((task, index) => (
            <div key={index} className={`task ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <h3>{task.taskName}</h3>
                <p>{task.description}</p>
              </div>
              <div className="task-icons">
                <button onClick={() => deleteTask(index)}>
                  <FaTrash className="delete-icon" />
                </button>
                <button onClick={() => editTask(index)}>
                  <FaEdit className="edit-icon" />
                </button>
                <button onClick={() => toggleTaskCompletion(index)}>
                  <FaCheck className="complete-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
