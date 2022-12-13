import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '../Box';
import { getMovieReviews } from '../../ApiService/ApiService';
import { List, AuthorName, ContentTetx } from './Reviews.styled';

interface IState {
  id: string;
  author: string;
  content: string;
}

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState<IState[]>([]);
  const { movieId } = useParams() as any;

  useEffect(() => {
    async function getReviews(id: string) {
      const reviews = await getMovieReviews(id);

      setMovieReviews(reviews);
    }

    getReviews(movieId);
  }, [movieId]);

  console.log(movieId);

  return (
    <Box>
      {movieReviews.length > 0 ? (
        <List>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <AuthorName>Author: {author}</AuthorName>
              <ContentTetx>{content}</ContentTetx>
            </li>
          ))}
        </List>
      ) : (
        <p>we don't have any reviews fot this movie</p>
      )}
    </Box>
  );
};

export default Reviews;
