import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 24px;

  &.active {
    color: orange;
    text-decoration: underline;
  }
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Layout = styled.div`
  margin-top: 12px;
  text-align: center;
`;

export const AditionText = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;
