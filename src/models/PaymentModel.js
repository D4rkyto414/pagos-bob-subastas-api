/**
 * Clase que representa un modelo de pago.
 * @class
 */
class PaymentModel {
  /**
   * Crea una instancia de PaymentModel.
   * @param {object} data - Los datos para inicializar el modelo.
   * @param {string} data.id - El identificador único del pago.
   * @param {number} data.amount - El monto del pago.
   * @param {string} data.currency - La moneda del pago (e.g., 'USD', 'EUR').
   * @param {string} data.status - El estado actual del pago (e.g., 'pending', 'completed', 'failed').
   * @param {string} data.userId - El ID del usuario que realizó el pago.
   */
  constructor({ id, amount, currency, status, userId }) {
    if (!id || !amount || !userId) {
      throw new Error('El ID, el monto y el ID de usuario son obligatorios para PaymentModel.');
    }
    this.id = id;
    this.amount = amount;
    this.currency = currency || 'USD';
    this.status = status || 'pending';
    this.userId = userId;
  }
}

export default PaymentModel;
