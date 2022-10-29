import Box from 'components/Box';
import { getTrending } from 'components/ApiService/ApiService';
import { useEffect, useState } from 'react';
import TrendingMovies from 'components/TrendingMovies';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    try {
      async function getTrendMovies() {
        const movies = await getTrending();
        setTrendMovies(movies);
      }

      getTrendMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Box pl={4}>
      <TrendingMovies items={trendMovies} />
    </Box>
  );
};
