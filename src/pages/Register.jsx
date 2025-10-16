import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/auth';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(form);
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className='container mt-5 col-md-4'>
      <h3 className='text-center mb-4'>Register</h3>
      <form onSubmit={handleSubmit} className='card card-body shadow-sm'>
        <input
          className='form-control mb-3'
          placeholder='Name'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          className='form-control mb-3'
          placeholder='Email'
          type='email'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          className='form-control mb-3'
          placeholder='Password'
          type='password'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className='btn btn-primary w-100'>Register</button>
      </form>

      <p className='text-center mt-3'>Already have an Account?{" "}
      <a href='/login' className='text-decoration-none'>Login</a>
      </p>
    </div>
  );
}
