import Box from 'components/Box';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from 'components/ApiService/ApiService';
import SearchMovie from 'components/SearchMovie';

export function Movies() {
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
    <Box as="main" pl={4}>
      <SearchForm onSubmit={getQuery} />
      <SearchMovie items={searchMovieItems} />
    </Box>
  );
}
