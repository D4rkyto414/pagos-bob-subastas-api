import { useState, useEffect } from 'react';
import { getPayments, updatePaymentStatus } from '../services/paymentService';

const usePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getPayments();
        setPayments(data);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar los pagos.');
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  const validatePayment = async (id) => {
    try {
      await updatePaymentStatus(id, 'validated');
      setPayments((prevPayments) =>
        prevPayments.filter((payment) => payment.id !== id),
      );
    } catch (err) {
      setError('Error al validar el pago.');
    }
  };

  return { payments, loading, error, validatePayment };
};

export default usePayments;
