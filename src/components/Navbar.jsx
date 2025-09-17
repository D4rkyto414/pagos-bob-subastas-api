import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-title">
        <h1>{user?.role === 'admin' ? 'Panel de Administración' : 'Panel de Usuario'}</h1>
      </div>
      <div className="navbar-profile">
        <FaUserCircle size={24} />
        <span className="profile-name">{user?.name}</span>
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
