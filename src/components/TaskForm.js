import React, { useState, useEffect } from 'react';


const TaskForm = ({ addTask, taskToEdit, editTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    
    const task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      name,
      description,
      completed: false
    };
    
    taskToEdit ? editTask(task.id, task) : addTask(task);

    setName('');
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          className="task-input" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Task Name"
        />
      </div>
      <div className="form-group">
        <textarea 
          className="task-textarea" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Task Description"
        />
      </div>
      <button type="submit" className="task-button">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
