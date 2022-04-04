import React, { useState, useContext } from 'react';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { SearchInput, SearchResults, SearchResultsItem, SearchWrapper } from './SearchBar.styles';
import { useBooks } from '../../hooks/useBooks';
import { Link } from 'react-router-dom';
import { BooksContext } from '../../providers/BooksProvider';

const SearchBar = () => {
  const [matchingBooks, setMatchingBooks] = useState([]);
  const { findBooks } = useBooks();

  const { setCurrentBook } = useContext(BooksContext);
  const { getBookById } = useBooks();

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

  const handleOpenBookCard = async id => {
    const book = await getBookById(id);
    setCurrentBook(book);
  };

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
            <Link
              to={`/books/${item.id}`}
              onClick={() => handleOpenBookCard(item.id)}
              onKeyPress={() => handleOpenBookCard(item.id)}
            >
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({
                  item,
                  index,
                })}
                key={item.id}
              >
                {item.title}
              </SearchResultsItem>{' '}
            </Link>
          ))}
      </SearchResults>
    </SearchWrapper>
  );
};

export default SearchBar;
