import React from 'react';
import Card from '../../components/Card';
import { FaUsers, FaCheckCircle, FaExchangeAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Panel de Administración</h1>
      <div className="dashboard-grid">
        <Card title="Nuevos Usuarios">
          <div className="dashboard-metric">
            <FaUsers size={48} className="icon-main" />
            <span className="metric-value">52</span>
          </div>
        </Card>
        <Card title="Pagos Pendientes">
          <div className="dashboard-metric">
            <FaCheckCircle size={48} className="icon-main" />
            <span className="metric-value">14</span>
          </div>
        </Card>
        <Card title="Reembolsos en Lote">
          <div className="dashboard-metric">
            <FaExchangeAlt size={48} className="icon-main" />
            <span className="metric-value">3</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
