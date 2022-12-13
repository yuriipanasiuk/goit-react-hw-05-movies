import Box from '../../components/Box';

import {
  NoticeText,
  DirectionText,
  Layout,
  ErrorPageText,
  Link,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <Box ml="auto" mr="auto" pt={5}>
      <ErrorPageText>404</ErrorPageText>
      <NoticeText>Opps, we have an error</NoticeText>
      <Layout>
        <DirectionText>go back to</DirectionText>
        <Link to="/home"> Home page</Link>
      </Layout>
    </Box>
  );
};

export default NotFound;
