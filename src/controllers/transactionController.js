import * as transactionService from '../services/transactionService';

/**
 * Obtiene el historial completo de transacciones del usuario.
 * @param {string} userId El ID del usuario.
 * @returns {Promise<array>} Una promesa con el historial de transacciones.
 */
export const getUserHistory = async (userId) => {
  try {
    const history = await transactionService.getHistory(userId);
    return history;
  } catch (error) {
    console.error('Error al obtener el historial de transacciones:', error);
    throw error;
  }
};

/**
 * Busca transacciones por un criterio específico (ej. tipo, fecha).
 * @param {object} filterOptions Las opciones para filtrar la búsqueda.
 * @returns {Promise<array>} Una promesa con las transacciones filtradas.
 */
export const searchTransactions = async (filterOptions) => {
  try {
    const transactions = await transactionService.searchTransactions(filterOptions);
    return transactions;
  } catch (error) {
    console.error('Error al buscar transacciones:', error);
    throw error;
  }
};
