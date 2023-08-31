import {useState, useEffect} from 'react';
import Axios from '~/api/axios';

type PaginatedData = {
  data: Array<any>;
};

export const usePaginationGetApi = <T>(initialUrl: string) => {
  const [paginatedData, setPaginatedData] = useState<PaginatedData>({
    data: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await Axios.get(url);
      if (response.data) {
        setPaginatedData(prevData => ({
          data: [...prevData.data, ...response.data],
        }));
        setError(null);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextItems = () => {
    const nextPageUrl = `${initialUrl}?_start=${
      paginatedData.data.length
    }&_end=${paginatedData.data.length + 10}`; // Adjust the limit as needed
    fetchData(nextPageUrl);
  };

  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  return {
    data: paginatedData.data,
    loading,
    error,
    fetchNextItems,
    refetch: () => fetchData(initialUrl),
  };
};
