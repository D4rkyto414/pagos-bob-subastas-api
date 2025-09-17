import React from 'react';
import { NavLink } from 'react-router-dom';

const adminLinks = [
  { path: '/admin/dashboard', label: 'Dashboard' },
  { path: '/admin/validate', label: 'Validar Pagos' },
  { path: '/admin/auction', label: 'Admin Subastas' },
  { path: '/admin/refund', label: 'Reembolsos' },
  { path: '/admin/users', label: 'Usuarios' },
];

const userLinks = [
  { path: '/user/dashboard', label: 'Dashboard' },
  { path: '/user/guarantee', label: 'Garantía' },
  { path: '/user/refund', label: 'Reembolso' },
  { path: '/user/auction', label: 'Subastas' },
  { path: '/user/history', label: 'Historial' },
];

const Sidebar = ({ role }) => {
  const links = role === 'admin' ? adminLinks : userLinks;

  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Logo" className="sidebar-logo" />
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
