import React from 'react';
import Table from '../../components/Table';
import Card from '../../components/Card';
import useHistory from '../../hooks/useHistory';

const HistoryPage = () => {
  const { historyData, loading, error } = useHistory();

  const headers = [
    { key: 'date', label: 'Fecha' },
    { key: 'type', label: 'Tipo' },
    { key: 'description', label: 'Descripción' },
    { key: 'amount', label: 'Monto' },
    { key: 'status', label: 'Estado' },
  ];

  if (loading) return <p>Cargando historial...</p>;
  if (error) return <p>Error al cargar el historial.</p>;

  return (
    <div className="history-page">
      <h1>Historial de Movimientos</h1>
      <Card>
        <Table headers={headers} data={historyData} />
      </Card>
    </div>
  );
};

export default HistoryPage;
