import Box from 'components/Box';
import { StyledLink } from './Header.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      align-items="center"
      pt={4}
      pb={4}
      boxShadow="header"
    >
      <Box as="nav" width={1200} ml="auto" mr="auto">
        {navItems.map(({ href, text }) => (
          <StyledLink key={href} to={href}>
            {text}
          </StyledLink>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
