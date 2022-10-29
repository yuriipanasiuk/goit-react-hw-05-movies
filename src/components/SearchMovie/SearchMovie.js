const SearchMovie = ({ items }) => {
  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
    </>
  );
};
export default SearchMovie;
