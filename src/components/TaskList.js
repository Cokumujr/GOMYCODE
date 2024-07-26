import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTasks } from '../JS/Tasks/taskSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.isDone;
    if (filter === 'incomplete') return !task.isDone;
    return true;
  });

  return (
    <div>
      <button onClick={() => dispatch(filterTasks('all'))}>All</button>
      <button onClick={() => dispatch(filterTasks('completed'))}>Completed</button>
      <button onClick={() => dispatch(filterTasks('incomplete'))}>Incomplete</button>

      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;