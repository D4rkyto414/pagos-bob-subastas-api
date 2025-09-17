import React, { useState } from 'react';
import Card from '../../../components/Card';
import Table from '../../../components/Table';
import useRefunds from '../../../hooks/useRefunds';

const RefundPage = () => {
  const { refunds, loading, error, processBatch } = useRefunds();
  const [selectedRefunds, setSelectedRefunds] = useState([]);

  const handleSelectRefund = (refundId) => {
    setSelectedRefunds((prevSelected) =>
      prevSelected.includes(refundId)
        ? prevSelected.filter((id) => id !== refundId)
        : [...prevSelected, refundId]
    );
  };

  const handleProcessSelected = async () => {
    if (selectedRefunds.length === 0) {
      alert('Por favor, selecciona al menos un reembolso para procesar.');
      return;
    }
    const success = await processBatch(selectedRefunds);
    if (success) {
      setSelectedRefunds([]);
      alert('Lote de reembolsos procesado con éxito.');
    } else {
      alert('Hubo un error al procesar el lote de reembolsos.');
    }
  };

  const headers = [
    {
      key: 'select',
      label: 'Seleccionar',
      render: (row) => (
        <input
          type="checkbox"
          checked={selectedRefunds.includes(row.id)}
          onChange={() => handleSelectRefund(row.id)}
        />
      ),
    },
    { key: 'id', label: 'ID de Reembolso' },
    { key: 'user', label: 'Usuario' },
    { key: 'amount', label: 'Monto' },
    { key: 'reason', label: 'Motivo' },
    { key: 'status', label: 'Estado' },
  ];

  if (loading) return <p>Cargando solicitudes de reembolso...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="admin-refund-page">
      <h1>Reembolsos en Lote</h1>
      <Card title="Solicitudes Pendientes">
        <Table headers={headers} data={refunds} />
        <button
          onClick={handleProcessSelected}
          disabled={selectedRefunds.length === 0}
          style={{ marginTop: '1rem' }}
        >
          Procesar Lote ({selectedRefunds.length})
        </button>
      </Card>
    </div>
  );
};

export default RefundPage;
