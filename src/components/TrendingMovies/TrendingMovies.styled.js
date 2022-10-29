import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 12px;
`;

export const Item = styled.li`
  color: blue;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;

  ::marker {
    color: black;
  }
  :not(:last-child) {
    margin-bottom: 8px;
  }

  :hover {
    color: #050311;
    text-decoration: none;
  }
`;
