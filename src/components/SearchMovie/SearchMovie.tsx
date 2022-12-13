import { useLocation } from 'react-router-dom';
import { List, Link, ListItem } from './SearchMovie.styled';

interface IProps {
  items: {
    id: number;
    original_title: string;
  }[];
}

const SearchMovie = ({ items }: IProps) => {
  const location = useLocation();

  if (items.length === 0) {
    return;
  }

  return (
    <>
      <List>
        {items.map(({ id, original_title }) => (
          <ListItem key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SearchMovie;
