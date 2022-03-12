import styled from 'styled-components';

export const SearchInput = styled.input`
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  border: ${({ theme }) => theme.color.formBar} 1px solid;
  color: ${({ theme }) => theme.color.darkBrown};
  height: 32px;
  padding: 4px 26px 4px 8px;
  resize: none;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 3px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
`;

export const SearchResultsItem = styled.li`
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkBrown};
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.color.beige : theme.color.white};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.color.beige};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.formBar};
  }
`;
