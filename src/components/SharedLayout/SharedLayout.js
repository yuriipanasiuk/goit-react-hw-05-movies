import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box>
      <Header>
        <Box width={'1200px'} pl={4} pr={4}>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </Box>
      </Header>
      <Outlet />
    </Box>
  );
};
