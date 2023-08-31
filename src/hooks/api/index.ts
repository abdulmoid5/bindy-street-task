import {useState, useEffect} from 'react';
import Axios from '~/api/axios';

export const useGetApi = (initialUrl: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await Axios.get(url);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  return {data, loading, error, refetch: () => fetchData(initialUrl)};
};
