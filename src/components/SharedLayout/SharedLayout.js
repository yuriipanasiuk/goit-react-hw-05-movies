import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box>
      <Header>
        <Box width={'1280px'} ml="auto" mr="auto">
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Box>
      </Header>
      <Outlet />
    </Box>
  );
};
