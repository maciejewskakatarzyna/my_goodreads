import styled from 'styled-components';

const RandomBookButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 80%;
  width: 28px;
  height: 28px;
  vertical-align: center;
  svg {
    fill: ${({ theme }) => theme.color.beige};
    background-color: ${({ theme }) => theme.color.darkBrown};
  }
`;

export default RandomBookButton;
