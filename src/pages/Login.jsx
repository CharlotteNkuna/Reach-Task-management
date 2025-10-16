import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/auth'; //API services or methods

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginUser(form.email, form.password)) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='container mt-5 col-md-4'>
      <h3 className='text-center mb-4'>Login</h3>
      <form onSubmit={handleSubmit} className='card card-body shadow-sm'>
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

        <button className='btn btn-success w-100'>Login</button>
      </form>

      <p className='text-center mt-3'>Don't have an Account?{" "}
      <a href='/register' className='text-decoration-none'>Register</a>
      </p>
    </div>
  );
}