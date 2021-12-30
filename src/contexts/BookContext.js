import React from 'react';

const BookContext = React.createContext({
  base: null,
  setBase: null,
  books: null,
  setBooks: null,
  booksToRead: null,
  setBooksToRead: null,
  booksRead: null,
  setBooksRead: null,
  currentBooks: null,
  setCurrentBooks: null,
  setRandomBook: null,
  setIsRandomBook: null,
  onShowCard: null,
  isBookCard: null,
  bookCard: null,
  setFilteredBooks: null,
  filteredBooks: null,
  updateBook: null,
  shelfs: null,
  setShelfs: null,
});

export default BookContext;
