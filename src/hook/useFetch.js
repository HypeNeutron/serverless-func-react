import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({ status: false, msg: '' });
  const [products, setProducts] = useState([]);

  const setError = (status = false, msg = '') => {
    setErrorMsg({ status, msg });
  };

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (err) {
      setError(true, `${err}`);
      setLoading(false);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { products, loading, errorMsg };
};
export default useFetch;
