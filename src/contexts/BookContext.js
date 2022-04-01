import React from 'react';

const BookContext = React.createContext({
  books: null,
  setBooks: null,
  booksToRead: null,
  setBooksToRead: null,
  booksRead: null,
  setBooksRead: null,
  setRandomBook: null,
  setIsRandomBook: null,
  updateBook: null,
  shelfs: null,
  setShelfs: null,
  currentBook: null,
  setCurrentBook: null,
});

export default BookContext;
