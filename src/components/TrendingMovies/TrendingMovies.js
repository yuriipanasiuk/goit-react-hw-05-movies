import { Link } from 'react-router-dom';
import { List, Title, Item } from './TrendingMovies.styled';

const TrendingMovies = ({ items }) => {
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {items.map(movie => (
          <Item key={movie.id}>
            <Link to="movieId">{movie.original_title}</Link>
          </Item>
        ))}
      </List>
    </>
  );
};
export default TrendingMovies;
