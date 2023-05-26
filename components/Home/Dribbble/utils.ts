import { useEffect, useState } from 'react';

export const useFetchDribbbleShots = () => {
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/get-dribbble-shots')
      .then((response) => response.json())
      .then(({ shots }) => {
        setData(shots.splice(0, 6, ''));
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  });

  return { error, data, loading: data.length === 0 };
};
