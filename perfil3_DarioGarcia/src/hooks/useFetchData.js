import { useState, useEffect } from 'react';

const useFetchData = (url = 'https://rickandmortyapi.com/api/character') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      // La API de Rick and Morty entrega el listado en la propiedad 'results'
      setData(result.results || result);
    } catch (err) {
      setError(err.message || 'Error al conectar con la API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
