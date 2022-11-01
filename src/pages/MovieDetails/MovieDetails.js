import Box from 'components/Box';
import { Suspense } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { getMovieDetails } from 'ApiService/ApiService';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';
import { StyledLink, Layout, AditionText } from './MoviDetails.styled';

const navItem = [
  {
    href: 'cast',
    text: 'Cast',
  },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
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
    <Box width={1280} ml="auto" mr="auto">
      <Link to="/home">go Back</Link>
      <MovieCard items={movieDetails} />

      <Layout>
        <AditionText>Adition information</AditionText>
        {navItem.map(({ href, text }) => (
          <StyledLink key={href} to={href}>
            {text}
          </StyledLink>
        ))}
      </Layout>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
