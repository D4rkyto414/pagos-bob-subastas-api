import { useState, useEffect } from 'react';
import { getHistory } from '../services/transactionService';

const useHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory();
        setHistoryData(data);
        setError(null);
      } catch (err) {
        setError('No se pudo cargar el historial.');
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return { historyData, loading, error };
};

export default useHistory;
