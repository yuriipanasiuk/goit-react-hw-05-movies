import Box from 'components/Box';
import { StyledLink, Layout } from './Header.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <Layout>
      <Box as="nav" width={1280} ml="auto" mr="auto">
        {navItems.map(({ href, text }) => (
          <StyledLink key={href} to={href}>
            {text}
          </StyledLink>
        ))}
      </Box>
    </Layout>
  );
};

export default Header;
