import * as refundService from '../services/refundService';
import * as transactionService from '../services/transactionService';

/**
 * Solicita un reembolso para una transacción específica.
 * @param {string} transactionId El ID de la transacción a reembolsar.
 * @param {object} refundDetails Detalles adicionales del reembolso (motivo, etc.).
 * @returns {Promise<object>} Una promesa con el resultado de la solicitud.
 */
export const requestRefund = async (transactionId, refundDetails) => {
  try {
    const result = await refundService.submitRefundRequest({
      transactionId,
      ...refundDetails,
    });

    // Registrar la solicitud en el historial de transacciones
    await transactionService.logTransaction({
      type: 'Solicitud de Reembolso',
      refId: transactionId,
      status: 'Pendiente',
    });

    return { success: true, message: 'Solicitud de reembolso enviada con éxito.' };
  } catch (error) {
    console.error('Error en el controlador de reembolso:', error);
    return { success: false, message: error.message || 'Error al solicitar el reembolso.' };
  }
};

/**
 * Procesa una lista de reembolsos pendientes. (Función de administrador)
 * @param {array} refundIds Un arreglo de IDs de reembolsos a procesar.
 * @returns {Promise<object>} Una promesa con el resultado del procesamiento.
 */
export const processRefunds = async (refundIds) => {
  try {
    const result = await refundService.processRefundBatch(refundIds);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error al procesar los reembolsos en lote:', error);
    return { success: false, message: 'Error al procesar los reembolsos.' };
  }
};
