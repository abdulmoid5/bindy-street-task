import {useEffect, useMemo, useRef, useState} from 'react';
import {useGetApi} from '~/hooks/api';

export const useCardView = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({row1: [], row2: [], row3: []});

  const {
    data: photos,
    loading: photosLoading,
    refetch,
  } = useGetApi('photos?_start=0&_limit=30');

  useEffect(() => {
    if (photosLoading || !photos) return;
    setData({
      row1: photos.slice(0, 10),
      row2: photos.slice(10, 20),
      row3: photos.slice(20, 30),
    });
    setLoading(false);
  }, [photos, photosLoading]);

  return useMemo(
    () => ({
      loading,
      data,
      refetch,
    }),
    [loading, data, refetch],
  );
};
