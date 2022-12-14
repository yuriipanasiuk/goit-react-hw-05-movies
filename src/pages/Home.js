import { useEffect, useState } from 'react';
import Box from '../components/Box';
import { getTrending } from '../ApiService/ApiService';
import TrendingMovies from '../components/TrendingMovies';

const Home = () => {
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
    <Box as="main" ml="auto" mr="auto" width={1280} mb={4} mt={4}>
      <TrendingMovies items={trendMovies} />
    </Box>
  );
};

export default Home;
