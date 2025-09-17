import { useState, useEffect } from 'react';
import { getUserBalance } from '../services/accountService';

const useResidue = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const userBalance = await getUserBalance();
        setBalance(userBalance);
        setError(null);
      } catch (err) {
        setError('No se pudo cargar el saldo.');
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };

  return { balance, loading, error, updateBalance };
};

export default useResidue;
