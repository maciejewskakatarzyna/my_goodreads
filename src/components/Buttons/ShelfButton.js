import styled from 'styled-components';

export const ShelfButton = styled.button`
  border: none;
  background: transparent;
  svg {
    width: 70px;
    height: 70px;
    fill: ${({ theme }) => theme.color.darkBrown};
    margin-right: 20px;

    &:hover {
      path {
        stroke: ${({ theme }) => theme.color.darkBrown};
        stroke-width: 3px;
      }
    }
  }
`;
