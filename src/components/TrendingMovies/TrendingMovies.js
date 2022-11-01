import { Link } from 'react-router-dom';
import { List, Title, Item, MovieTitle } from './TrendingMovies.styled';

const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

const TrendingMovies = ({ items }) => {
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {items.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <MovieTitle>{movie.original_title}</MovieTitle>
          </Item>
        ))}
      </List>
    </>
  );
};
export default TrendingMovies;
