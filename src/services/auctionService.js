import api from './api';

/**
 * Obtiene la lista de subastas activas o en curso.
 * @returns {Promise<Array>} Una promesa que resuelve con la lista de subastas.
 */
export const getAuctions = async () => {
  try {
    // Simulación de una llamada a la API real.
    const response = await api.get('/auctions');
    return response.data;
  } catch (error) {
    console.error("Error al obtener subastas:", error);
    // Datos de ejemplo para la demo
    return [
      { id: 101, item: 'Lote de Vinos Clásicos', currentBid: 500, status: 'Activa' },
      { id: 102, item: 'Colección de Arte Moderno', currentBid: 1200, status: 'Activa' },
      { id: 103, item: 'Reloj de Bolsillo Antiguo', currentBid: 350, status: 'Finalizada' },
    ];
  }
};

/**
 * Realiza una puja en una subasta específica.
 * @param {number} auctionId El ID de la subasta.
 * @param {number} bidAmount La cantidad a pujar.
 * @returns {Promise<Object>} Una promesa que resuelve con la información de la puja.
 */
export const placeBid = async (auctionId, bidAmount) => {
  try {
    const response = await api.post(`/auctions/${auctionId}/bid`, { bidAmount });
    return response.data;
  } catch (error) {
    console.error("Error al realizar la puja:", error);
    throw error;
  }
};

/**
 * Cierra una subasta y determina el ganador. (Función de administrador)
 * @param {number} auctionId El ID de la subasta a cerrar.
 * @returns {Promise<Object>} Una promesa que resuelve con los resultados finales de la subasta.
 */
export const closeAuction = async (auctionId) => {
  try {
    const response = await api.post(`/auctions/${auctionId}/close`);
    return response.data;
  } catch (error) {
    console.error("Error al cerrar la subasta:", error);
    throw error;
  }
};
