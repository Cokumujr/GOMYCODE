import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);

  const handleSave = (updatedTask) => {
    editTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <TaskForm 
          taskToEdit={task} 
          editTask={handleSave} 
        />
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => toggleCompletion(task.id)}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
