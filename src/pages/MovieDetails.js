import Box from 'components/Box';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/ApiService/ApiService';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';

const navItem = [
  {
    href: 'cast',
    text: 'Cast',
  },
  { href: 'reviews', text: 'Reviews' },
];

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
    <Box width={1200} ml="auto" mr="auto">
      <MovieCard items={movieDetails} />

      <p>Adition information</p>
      {navItem.map(({ href, text }) => (
        <NavLink key={href} to={href}>
          {text}
        </NavLink>
      ))}
      <Outlet />
    </Box>
  );
};
