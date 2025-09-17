import React, { useState, useEffect } from 'react';
import Card from '../../../components/Card';
import Table from '../../../components/Table';
import { getUsers, getUserDetails } from '../../../services/accountService';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Error al cargar la lista de usuarios.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleViewDetails = async (userId) => {
    try {
      const details = await getUserDetails(userId);
      setSelectedUser(details);
    } catch (err) {
      setError('No se pudo cargar el historial del usuario.');
    }
  };

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Email' },
    { key: 'lastLogin', label: 'Último Acceso' },
    {
      key: 'actions',
      label: 'Acciones',
      render: (user) => (
        <button onClick={() => handleViewDetails(user.id)}>
          Ver Detalles
        </button>
      ),
    },
  ];

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="admin-user-page">
      <h1>Gestión de Usuarios</h1>
      <Card title="Lista de Usuarios">
        <Table headers={headers} data={users} />
      </Card>

      {selectedUser && (
        <Card title={`Detalles de ${selectedUser.name}`} style={{ marginTop: '2rem' }}>
          <p><strong>ID de Usuario:</strong> {selectedUser.id}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Rol:</strong> {selectedUser.role}</p>
          <p><strong>Saldo:</strong> ${selectedUser.balance}</p>
          <h3>Historial de Movimientos</h3>
          <Table
            headers={[
              { key: 'date', label: 'Fecha' },
              { key: 'type', label: 'Tipo' },
              { key: 'amount', label: 'Monto' },
            ]}
            data={selectedUser.history}
          />
          <button onClick={() => setSelectedUser(null)} style={{ marginTop: '1rem' }}>
            Cerrar
          </button>
        </Card>
      )}
    </div>
  );
};

export default UserPage;
