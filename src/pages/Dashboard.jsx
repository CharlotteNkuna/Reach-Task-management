import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getLoggedInUser } from '../utils/auth';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const user = getLoggedInUser();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const deleteTask = (index) => setTasks((prev) => prev.filter((_, i) => i !== index));

  const editTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  const toggleStatus = (index, status) => {
    const updated = [...tasks];
    updated[index].status = status;
    setTasks(updated);
  };

  const filtered =
    filter === 'all' ? tasks : tasks.filter((t) => t.status === filter);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'due-soon')
      return new Date(a.dueDate || Infinity) - new Date(b.dueDate || Infinity);
    return 0;
  });

  return (
    <>
      <Navbar />
      <div className='container mt-4'>
        <h4>Welcome, {user?.name || 'User'}</h4>

        <TaskForm addTask={addTask} />

        <div className='d-flex justify-content-between align-items-center mt-3'>
          <ul className='nav nav-tabs'>
            {['all', 'pending', 'completed', 'archived'].map((s) => (
              <li className='nav-item' key={s}>
                <button
                  className={`nav-link ${filter === s ? 'active' : ''}`}
                  onClick={() => setFilter(s)}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>

          <select
            className='form-select w-auto'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value='newest'>Newest</option>
            <option value='due-soon'>Due soon</option>
          </select>
        </div>

        <TaskList
          tasks={sorted}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleStatus={toggleStatus}
        />
      </div>
    </>
  );
}
