import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/auth';

export default function Navbar() {
const navigate = useNavigate();
const handleLogout = () => {
logoutUser ();
navigate('/login');
};

return (
<nav className='navbar navbar-dark bg-dark px-4'>
<span className='navbar-brand mb-0 h1'>Task Manager</span>
<button className='btn btn-outline-light btn-sm'
onClick={handleLogout}>Logout</button>
</nav>
);
}