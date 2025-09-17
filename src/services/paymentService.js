import api from './api';

const paymentsData = [
  { id: 1, user: 'Juan Perez', amount: 'US$ 50.00', status: 'Pendiente' },
  { id: 2, user: 'Maria Lopez', amount: 'US$ 150.00', status: 'Pendiente' },
];

export const getPayments = async () => {
  try {
    // Simulación de una llamada a la API
    const response = await api.get('/payments/pending');
    return response.data;
  } catch (error) {
    return paymentsData;
  }
};

export const updatePaymentStatus = async (id, status) => {
  try {
    // Simulación de una llamada a la API
    await api.put(`/payments/${id}`, { status });
    console.log(`Pago ${id} actualizado a ${status}`);
  } catch (error) {
    console.error(`Error al actualizar el pago ${id}`);
    throw error;
  }
};
