import {useEffect, useMemo, useState} from 'react';
import {useGetApi} from '~/hooks/api';

const CARD_COUNT_PER_ROW = 10;
const TOTAL_CARDS = 30;

export const useCardView = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    row1: [],
    row2: [],
    row3: [],
  });

  const {
    data: photos = [],
    loading: photosLoading,
    refetch,
  } = useGetApi('photos?_start=0&_limit=30');

  useEffect(() => {
    if (photosLoading || !photos) return;
    setData({
      row1: photos.slice(0, CARD_COUNT_PER_ROW),
      row2: photos.slice(CARD_COUNT_PER_ROW, CARD_COUNT_PER_ROW * 2),
      row3: photos.slice(CARD_COUNT_PER_ROW * 2, TOTAL_CARDS),
    });
    setLoading(false);
  }, [photos, photosLoading]);

  return useMemo(() => ({loading, data, refetch}), [loading, data, refetch]);
};
