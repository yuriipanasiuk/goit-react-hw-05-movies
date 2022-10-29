import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  width: 300px;
  padding-left: 8px;
  padding-bottom: 4px;
  padding-top: 4px;
  padding-right: 4px;
  font-size: 18px;
  margin-right: 8px;
  border-radius: 5px;
  border-width: 1px;
`;

export const Button = styled.button`
  width: 80px;
  font-size: 16px;
  padding: 4px;
  cursor: pointer;
  border-radius: 5px;
  border: none;

  :hover {
    background-color: orange;
    color: white;
  }
`;
