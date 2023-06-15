import styled from 'styled-components';

export const StatItem = styled.p`
  font-weight: 500;
  display: block;
  width: fit-content;
  padding: 5px;
  margin: 20px;
  &:hover {
    border-radius: 5px;
    background-color: rgb(240, 240, 240);
  }
  &::first-letter {
    text-transform: capitalize;
  }
`;
