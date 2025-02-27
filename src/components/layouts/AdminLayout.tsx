import React from 'react';
import { Outlet, Link } from 'react-router-dom';  // Outlet renders the nested routes

const AdminLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
      <div>
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;
