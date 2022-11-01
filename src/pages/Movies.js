import Box from 'components/Box';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from 'ApiService/ApiService';
import SearchMovie from 'components/SearchMovie';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchMovieItems, setSearchMovieItems] = useState([]);

  const getQuery = data => {
    if (data === '') {
      return;
    }
    setQuery(data);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getSearchMovie() {
      try {
        const movies = await searchMovies(query);

        if (movies.length > 0) {
          setSearchMovieItems(movies);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getSearchMovie();
  }, [query]);

  return (
    <Box as="main" width={1280} ml="auto" mr="auto" mt={4}>
      <SearchForm onSubmit={getQuery} />
      <SearchMovie items={searchMovieItems} />
    </Box>
  );
}
