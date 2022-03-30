import styled from 'styled-components';

export const ShelfButton = styled.button`
  border: none;
  background: transparent;
  svg {
    width: 7rem;
    height: 7rem;
    fill: ${({ theme }) => theme.color.darkBrown};
    margin-right: 2rem;

    &:hover {
      path {
        stroke: ${({ theme }) => theme.color.darkBrown};
        stroke-width: 0.3rem;
      }
    }
  }
`;
