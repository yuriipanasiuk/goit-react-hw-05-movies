import { List, Link } from './SearchMovie.styled';

const SearchMovie = ({ items }) => {
  return (
    <>
      <List>
        {items.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`}>{original_title}</Link>
          </li>
        ))}
      </List>
    </>
  );
};
export default SearchMovie;
