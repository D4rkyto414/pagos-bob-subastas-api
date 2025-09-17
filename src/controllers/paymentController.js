import * as paymentService from '../services/paymentService';
import * as transactionService from '../services/transactionService';

/**
 * Procesa un nuevo pago, validando los datos y enviándolos al servicio.
 * @param {object} paymentData Los datos del pago a procesar.
 * @returns {Promise<object>} Una promesa con el resultado del pago.
 */
export const processPayment = async (paymentData) => {
  try {
    // Aquí podrías agregar lógica de validación de datos
    if (!paymentData.amount || paymentData.amount <= 0) {
      throw new Error('El monto del pago debe ser un valor positivo.');
    }

    const result = await paymentService.createPayment(paymentData);

    // Lógica adicional, como registrar la transacción en el historial
    await transactionService.logTransaction({
      type: 'Pago',
      ...result,
    });

    return { success: true, message: 'Pago procesado con éxito.' };
  } catch (error) {
    console.error('Error en el controlador de pago:', error);
    return { success: false, message: error.message || 'Error al procesar el pago.' };
  }
};

/**
 * Obtiene el estado de un pago específico.
 * @param {string} paymentId El ID del pago.
 * @returns {Promise<object>} Una promesa con el estado del pago.
 */
export const getPaymentStatus = async (paymentId) => {
  try {
    const status = await paymentService.fetchPaymentStatus(paymentId);
    return status;
  } catch (error) {
    console.error('Error al obtener el estado del pago:', error);
    throw error;
  }
};
