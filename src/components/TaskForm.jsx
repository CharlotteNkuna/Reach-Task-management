import { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask({
      text,
      date: new Date().toISOString(),
      dueDate: dueDate || null,
      status: 'pending',
    });

    setText('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className='input-group my-3'>
      <input
        className='form-control'
        placeholder='Task title'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type='date'
        className='form-control w-auto ms-2'
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className='btn btn-primary'>Add</button>
    </form>
  );
}
