import { useLocation } from 'react-router-dom';
import { List, Link } from './SearchMovie.styled';

const SearchMovie = ({ items }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {items.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};
export default SearchMovie;
