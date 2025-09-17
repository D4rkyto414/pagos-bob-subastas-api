import api from './api';

export const getHistory = async () => {
  try {
    // Simulación de una llamada a la API
    const response = await api.get('/transactions/history');
    return response.data;
  } catch (error) {
    // Datos de ejemplo en caso de error o para simulación
    return [
      { id: 1, date: '15-Sep-25', type: 'Pago', description: 'Pago Carrito #411', amount: 'US$ 312.04', status: 'Validado' },
      { id: 2, date: '15-Sep-25', type: 'Reembolso', description: 'Reembolso #29501', amount: 'US$ 69.04', status: 'Validado' },
      { id: 3, date: '15-Sep-25', type: 'Pago', description: 'Pago Acuerdo #21899', amount: 'US$ 69.04', status: 'Validado' },
    ];
  }
};
