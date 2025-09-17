import React from 'react';
import Card from '../../components/Card';
import { FaMoneyBillWave, FaHistory } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Panel de Usuario</h1>
      <div className="dashboard-grid">
        <Card title="Saldo Actual">
          <div className="dashboard-metric">
            <FaMoneyBillWave size={48} className="icon-main" />
            <span className="metric-value">$ 1,250.00</span>
          </div>
        </Card>
        <Card title="Últimos Movimientos">
          <div className="dashboard-list">
            <ul>
              <li>Pago #2538 - $312.04</li>
              <li>Reembolso #5498 - $69.04</li>
              <li>Garantía #9875 - $150.00</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
