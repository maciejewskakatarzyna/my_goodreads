import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { SearchInput, SearchResults, SearchResultsItem, SearchWrapper } from './SearchBar.styles';
import { useBooks } from '../../hooks/useBooks';

const SearchBar = () => {
  const [matchingBooks, setMatchingBooks] = useState([]);
  const { findBooks } = useBooks();

  const getMatchingBooks = debounce(async ({ inputValue }) => {
    const { books } = await findBooks(inputValue);
    setMatchingBooks(books);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } =
    useCombobox({
      items: matchingBooks,
      onInputValueChange: getMatchingBooks,
      itemToString: item => (item ? item.title : ''),
    });

  return (
    <SearchWrapper {...getComboboxProps()}>
      <SearchInput {...getInputProps()} name='Search' id='Search' placeholder='Search' />
      <SearchResults
        isVisible={isOpen && matchingBooks.length > 0}
        {...getMenuProps()}
        aria-label='results'
      >
        {isOpen &&
          matchingBooks.map((item, index) => (
            <SearchResultsItem
              isHighlighted={highlightedIndex === index}
              {...getItemProps({ item: 'Mordo', index })}
              key={item.id}
            >
              {item.title}
            </SearchResultsItem>
          ))}
      </SearchResults>
    </SearchWrapper>
  );
};

export default SearchBar;
