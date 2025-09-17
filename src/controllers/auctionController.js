import * as auctionService from '../services/auctionService';

/**
 * Obtiene la lista de subastas disponibles.
 * @returns {Promise<array>} Una promesa con la lista de subastas.
 */
export const getAvailableAuctions = async () => {
  try {
    const auctions = await auctionService.getAuctions();
    return auctions;
  } catch (error) {
    console.error('Error en el controlador de subastas:', error);
    throw error;
  }
};

/**
 * Realiza una puja en una subasta.
 * @param {string} auctionId El ID de la subasta.
 * @param {number} bidAmount La cantidad a pujar.
 * @returns {Promise<object>} Una promesa con el resultado de la puja.
 */
export const placeBid = async (auctionId, bidAmount) => {
  try {
    if (bidAmount <= 0) {
      throw new Error('La puja debe ser un valor positivo.');
    }
    const result = await auctionService.placeBid(auctionId, bidAmount);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error al realizar la puja:', error);
    return { success: false, message: error.message || 'Error al realizar la puja.' };
  }
};

/**
 * Cierra una subasta. (Función de administrador)
 * @param {string} auctionId El ID de la subasta a cerrar.
 * @returns {Promise<object>} Una promesa con el resultado del cierre.
 */
export const endAuction = async (auctionId) => {
  try {
    const result = await auctionService.closeAuction(auctionId);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error al cerrar la subasta:', error);
    return { success: false, message: 'Error al cerrar la subasta.' };
  }
};
