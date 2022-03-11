import styled from 'styled-components';

const RandomBookButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 70%;
  width: 28px;
  height: 28px;
  svg {
    fill: ${({ theme }) => theme.color.beige};
    background-color: ${({ theme }) => theme.color.darkBrown};
  }
`;

export default RandomBookButton;
