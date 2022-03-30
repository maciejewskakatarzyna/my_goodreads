import styled from 'styled-components';

const RandomBookButton = styled.button`
  border: none;
  cursor: pointer;
  width: 2.8rem;
  height: 2.8rem;
  margin: 0.2rem 0 0 1rem;
  svg {
    fill: ${({ theme }) => theme.color.beige};
    background-color: ${({ theme }) => theme.color.darkBrown};
  }
`;

export default RandomBookButton;
