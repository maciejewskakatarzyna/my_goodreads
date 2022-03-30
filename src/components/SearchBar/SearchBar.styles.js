import styled from 'styled-components';

export const SearchInput = styled.input`
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.3rem;
  border: ${({ theme }) => theme.color.formBar} 0.1rem solid;
  color: ${({ theme }) => theme.color.darkBrown};
  resize: none;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.s};
  padding: 0.4rem 0.8rem 0.4rem 0.4rem;
  height: 2.4rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 10;
  max-height: 50rem;
  overflow-y: scroll;
  border-radius: 0.3rem;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};

  a {
    text-decoration: none;
  }
`;

export const SearchResultsItem = styled.li`
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkBrown};
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.color.beige : theme.color.white};
  width: 100%;
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.beige};
  }
  &:not(:last-child) {
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.formBar};
  }
`;
