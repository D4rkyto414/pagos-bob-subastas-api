import React, { useState, useEffect } from 'react';
import Card from '../../../components/Card';
import Table from '../../../components/Table';
import { getAuctions, closeAuction } from '../../../services/auctionService';

const AuctionPage = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const data = await getAuctions();
        setAuctions(data);
      } catch (err) {
        setError('Error al cargar las subastas.');
      } finally {
        setLoading(false);
      }
    };
    fetchAuctions();
  }, []);

  const handleCloseAuction = async (auctionId) => {
    try {
      await closeAuction(auctionId);
      // Actualiza la lista para reflejar el cambio de estado
      setAuctions(prevAuctions =>
        prevAuctions.map(auction =>
          auction.id === auctionId ? { ...auction, status: 'Finalizada' } : auction
        )
      );
    } catch (err) {
      setError('No se pudo cerrar la subasta.');
    }
  };

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'item', label: 'Artículo' },
    { key: 'currentBid', label: 'Puja Actual' },
    { key: 'status', label: 'Estado' },
    {
      key: 'actions',
      label: 'Acciones',
      render: (auction) => (
        auction.status === 'Activa' ? (
          <button onClick={() => handleCloseAuction(auction.id)}>Cerrar Subasta</button>
        ) : (
          <span>Finalizada</span>
        )
      ),
    },
  ];

  if (loading) return <p>Cargando subastas...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="admin-auction-page">
      <h1>Administración de Subastas</h1>
      <Card title="Subastas Activas">
        <Table headers={headers} data={auctions} />
      </Card>
    </div>
  );
};

export default AuctionPage;
