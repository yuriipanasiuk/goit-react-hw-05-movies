import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  background-color: white;
  box-shadow: 0px 2px 14px -4px rgba(0, 0, 0, 0.75);
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

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

export const Nav = styled.nav`
  padding-left: 20px;
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  /* margin-left: 50px;
  margin-right: auto; */
`;
