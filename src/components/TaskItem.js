import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask , toggleTask } from '../JS/Tasks/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span>{task.name}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;