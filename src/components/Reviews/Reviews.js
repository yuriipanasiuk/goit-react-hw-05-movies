import Box from 'components/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/ApiService/ApiService';
import { List, AuthorName, ContentTetx } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews(id) {
      const reviews = await getMovieReviews(id);

      setMovieReviews(reviews);
    }

    getReviews(movieId);
  }, [movieId]);

  //TODO: add font style to p
  return (
    <Box>
      <List>
        {movieReviews.map(({ id, author, content }) => (
          <li key={id}>
            <AuthorName>Author: {author}</AuthorName>
            <ContentTetx>{content}</ContentTetx>
          </li>
        ))}
      </List>
    </Box>
  );
};

export default Reviews;
