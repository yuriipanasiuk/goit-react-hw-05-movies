import { useEffect, useState } from 'react';
import Box from '../Box';
import {
  MovieTitle,
  Popularity,
  Owerview,
  Genre,
  OwerviewTetx,
  ImageWraper,
} from './MovieCard.styled';

const baseImageUrl = 'https://image.tmdb.org/t/p/w400';

interface IProps {
  items: {
    poster_path: string;
    original_title: string;
    release_date: string;
    title: string;
    popularity: string;
    overview: string;
    genres: { id: number; name: string }[];
  };
}

const MovieCard = ({ items }: IProps) => {
  const [genreMovie, setGenre] = useState<string[]>();
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
    <Box display="flex" mt={5}>
      <ImageWraper>
        {poster_path && (
          <img src={`${baseImageUrl}${poster_path}`} alt={title} />
        )}
      </ImageWraper>
      <Box width={900}>
        {release_date && (
          <MovieTitle>
            {original_title} ({release_date.slice(0, 4)})
          </MovieTitle>
        )}
        <Popularity>Popularity: {popularity}</Popularity>
        <Owerview>Owerview</Owerview>
        <OwerviewTetx>{overview}</OwerviewTetx>
        <Genre>Genres</Genre>
        <span>{`${genreMovie}`}</span>
      </Box>
    </Box>
  );
};

export default MovieCard;
