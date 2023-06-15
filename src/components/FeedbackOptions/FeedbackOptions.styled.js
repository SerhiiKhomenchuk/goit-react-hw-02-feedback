import styled from 'styled-components';

export const Button = styled.button`
  font-size: 32px;
  border-radius: 5px;
  margin-right: 30px;
  padding: 10px;
  width: 140px;
  border-color: rgb(240, 240, 240);
  &:hover {
    color: white;
    outline: green;
    border: none;
    &:first-child {
      background-color: greenyellow;
    }
    &:last-child {
      background-color: red;
    }
  }
  &::first-letter {
    text-transform: capitalize;
  }
`;
