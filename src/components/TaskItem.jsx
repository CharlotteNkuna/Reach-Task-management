import { useState } from 'react';

export default function TaskItem({ task, index, deleteTask, editTask, toggleStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    editTask(index, text);
    setIsEditing(false);
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-start ${
        task.status === 'completed' ? 'list-group-item-success' : ''
      }`}
    >
      <div>
        {isEditing ? (
          <input
            className='form-control form-control-sm'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <div>
            <strong>{task.text}</strong>
            <br />
            {task.dueDate && (
              <small className='text-muted'>
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </small>
            )}
          </div>
        )}
      </div>

      <div className='d-flex gap-2 align-items-center'>
        {isEditing ? (
          <button className='btn btn-sm btn-success' onClick={save}>
            Save
          </button>
        ) : (
          <button
            className='btn btn-sm btn-warning'
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        {task.status === 'pending' && (
          <button
            className='btn btn-sm btn-success'
            onClick={() => toggleStatus(index, 'completed')}
          >
            Done
          </button>
        )}

        {task.status === 'completed' && (
          <button
            className='btn btn-sm btn-secondary'
            onClick={() => toggleStatus(index, 'archived')}
          >
            Archive
          </button>
        )}

        {task.status === 'archived' && (
          <button
            className='btn btn-sm btn-info'
            onClick={() => toggleStatus(index, 'pending')}
          >
            Restore
          </button>
        )}

        <button
          className='btn btn-sm btn-danger'
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
