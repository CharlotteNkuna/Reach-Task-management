import TaskItem from './TaskItem';

export default function TaskList({ tasks, deleteTask, editTask, toggleStatus }) {
  if (tasks.length === 0)
    return <p className='text-muted text-center mt-3'>No tasks found for this filter.</p>;

  return (
    <ul className='list-group mt-3'>
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          task={task}
          index={i}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleStatus={toggleStatus}
        />
      ))}
    </ul>
  );
}
