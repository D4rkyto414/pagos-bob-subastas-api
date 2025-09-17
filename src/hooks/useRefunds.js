import { useState, useEffect } from 'react';
import { getPendingRefunds, processRefundBatch } from '../services/refundService';

const useRefunds = () => {
  const [refunds, setRefunds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRefunds = async () => {
      try {
        const data = await getPendingRefunds();
        setRefunds(data);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar las solicitudes de reembolso.');
      } finally {
        setLoading(false);
      }
    };
    fetchRefunds();
  }, []);

  const processBatch = async (refundIds) => {
    try {
      setLoading(true);
      await processRefundBatch(refundIds);
      // Elimina los reembolsos procesados del estado local
      setRefunds(prevRefunds => prevRefunds.filter(refund => !refundIds.includes(refund.id)));
      setError(null);
      return true;
    } catch (err) {
      setError('Error al procesar el lote de reembolsos.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { refunds, loading, error, processBatch };
};

export default useRefunds;
