import styled from 'styled-components';
import { Link as MovieLink } from 'react-router-dom';

export const List = styled.ul`
  padding-left: 15px;
`;

export const Link = styled(MovieLink)`
  :hover {
    color: orange;
  }
`;
