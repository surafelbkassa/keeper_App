import React, { useState } from 'react'

const Form = (props) => {
  const [task, setTask] = useState({
    taskName: '',
    description: ''
  });

  function handleChange(event) {   
    const { name, value } = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value
      }
    });
  }

  function submitTask(event) {
    event.preventDefault();
    props.addTask(task);
    setTask({ taskName: '', description: '' }); // Reset the form
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action
      submitTask(event);
    }
  }

  return (
    <div>
        <input 
          type="text" 
          name="taskName" // Added name attribute
          value={task.taskName} 
          placeholder="Task" 
          onChange={handleChange}
          onKeyDown={handleEnter} // Added onKeyDown event
        />
        <textarea 
          name="description" // Added name attribute
          value={task.description} 
          placeholder="Description" 
          onChange={handleChange}
          onKeyDown={handleEnter} // Added onKeyDown event
        ></textarea>
        <button className='btn' onClick={submitTask}>Add task</button>
    </div>
  )
}

export default Form;
