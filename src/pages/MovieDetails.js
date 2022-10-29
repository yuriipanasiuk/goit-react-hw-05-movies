import Box from 'components/Box';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/ApiService/ApiService';
import { useEffect } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  getMovieDetails(movieId);

  useEffect(() => {});

  return (
    <Box>
      <h2>Adition information</h2>

      <NavLink to="cast">cast</NavLink>
      <NavLink to="reviews">reviews</NavLink>
      <Outlet />
    </Box>
  );
};
