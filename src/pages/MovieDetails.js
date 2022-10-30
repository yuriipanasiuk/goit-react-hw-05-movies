import Box from 'components/Box';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/ApiService/ApiService';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';

export const MovieDetails = () => {
  const [movieDetails, setMoviDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getDetails() {
      try {
        const results = await getMovieDetails(movieId);
        setMoviDetails(results);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [movieId]);

  return (
    <Box>
      <MovieCard items={movieDetails} />

      <p>Adition information</p>

      <NavLink to="cast">cast</NavLink>
      <NavLink to="reviews">reviews</NavLink>
      <Outlet />
    </Box>
  );
};
