import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../styles/components.css';

const Layout = ({ userRole, children }) => {
  return (
    <div className="layout-container">
      <Sidebar role={userRole} />
      <div className="main-content">
        <Navbar />
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
