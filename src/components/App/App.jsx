import { Routes, Route } from 'react-router-dom';
import Box from 'components/Box';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
};
