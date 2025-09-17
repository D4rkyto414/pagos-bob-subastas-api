/**
 * Clase que representa un modelo de subasta.
 * @class
 */
class AuctionModel {
  /**
   * Crea una instancia de AuctionModel.
   * @param {object} data - Los datos para inicializar el modelo.
   * @param {string} data.id - El identificador único de la subasta.
   * @param {string} data.item - El nombre o descripción del artículo subastado.
   * @param {number} data.currentBid - La puja actual más alta.
   * @param {string} data.endTime - La fecha y hora en que termina la subasta.
   * @param {string} data.status - El estado actual de la subasta (e.g., 'active', 'ended').
   */
  constructor({ id, item, currentBid, endTime, status }) {
    if (!id || !item || !currentBid || !endTime) {
      throw new Error('El ID, artículo, puja actual y tiempo de finalización son obligatorios para AuctionModel.');
    }
    this.id = id;
    this.item = item;
    this.currentBid = currentBid;
    this.endTime = endTime;
    this.status = status || 'active';
  }
}

export default AuctionModel;
