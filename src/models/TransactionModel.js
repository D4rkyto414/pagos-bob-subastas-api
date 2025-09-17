/**
 * Clase que representa un modelo de transacción.
 * @class
 */
class TransactionModel {
  /**
   * Crea una instancia de TransactionModel.
   * @param {object} data - Los datos para inicializar el modelo.
   * @param {string} data.id - El identificador único de la transacción.
   * @param {string} data.type - El tipo de transacción (e.g., 'payment', 'refund', 'bid').
   * @param {number} data.amount - El monto de la transacción.
   * @param {string} data.date - La fecha y hora de la transacción.
   * @param {string} data.userId - El ID del usuario asociado con la transacción.
   */
  constructor({ id, type, amount, date, userId }) {
    if (!id || !type || !amount || !date || !userId) {
      throw new Error('Todos los campos son obligatorios para TransactionModel.');
    }
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.userId = userId;
  }
}

export default TransactionModel;
