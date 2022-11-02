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

export const Layout = styled.header`
  display: flex;
  align-items: 'center';
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.header};
  margin-bottom: 12px;
`;
