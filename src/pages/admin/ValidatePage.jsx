import React from 'react';
import Card from '../../components/Card';
import Table from '../../components/Table';
import usePayments from '../../hooks/usePayments';

const ValidatePage = () => {
  const { payments, loading, error, validatePayment } = usePayments();

  const handleValidate = (paymentId) => {
    validatePayment(paymentId);
  };

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'user', label: 'Usuario' },
    { key: 'amount', label: 'Monto' },
    { key: 'status', label: 'Estado' },
    {
      key: 'actions',
      label: 'Acciones',
      render: (row) => (
        <button onClick={() => handleValidate(row.id)}>Validar</button>
      ),
    },
  ];

  if (loading) return <p>Cargando pagos...</p>;
  if (error) return <p>Error al cargar pagos.</p>;

  return (
    <div className="validate-page">
      <h1>Validación de Pagos</h1>
      <Card>
        <Table headers={headers} data={payments} />
      </Card>
    </div>
  );
};

export default ValidatePage;
