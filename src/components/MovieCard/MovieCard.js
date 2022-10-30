import Box from 'components/Box';
import { useEffect, useState } from 'react';
import { MovieTitle, Popularity, Owerview, Genre } from './MovieCard.styled';

const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ items }) => {
  const [genreMovie, setGenre] = useState();
  const {
    poster_path,
    original_title,
    release_date,
    title,
    popularity,
    overview,
    genres,
  } = items;

  useEffect(() => {
    if (!genres) {
      return;
    }
    const genresType = genres.map(genre => genre.name);

    setGenre(genresType);
  }, [genres]);

  return (
    <Box display="flex" pl={5}>
      <Box mr={5}>
        <img src={`${baseImageUrl}${poster_path}`} alt={title} />
      </Box>
      <Box>
        {release_date && (
          <MovieTitle>
            {original_title} ({release_date.slice(0, 4)})
          </MovieTitle>
        )}
        <Popularity>Popularity: {popularity}</Popularity>
        <Owerview>Owerview</Owerview>
        <p>{overview}</p>
        <Genre>Genres</Genre>
        <span>{`${genreMovie}`}</span>
      </Box>
    </Box>
  );
};

export default MovieCard;
