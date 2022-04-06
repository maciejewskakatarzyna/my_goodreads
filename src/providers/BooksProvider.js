import React, { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';

export const BooksContext = React.createContext({
  books: [],
  setBooks: () => {},
  setRandomBook: () => {},
  setIsRandomBook: () => {},
  shelfs: [],
  setShelfs: () => {},
  currentBook: null,
  setCurrentBook: () => {},
  isAddedToCurrent: false,
  setIsAddedToCurrent: () => {},
  startReading: () => {},
  randomBook: null,
  isRandomBook: false,
  handleOpenBookCard: () => {},
  deleteBook: () => {},
});

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [randomBook, setRandomBook] = useState(null);
  const [isRandomBook, setIsRandomBook] = useState(false);
  const [shelfs, setShelfs] = useState([]);
  const [currentBook, setCurrentBook] = useState(0);
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false);
  const [didMounted, setDidMounted] = useState(false);

  const { getShelfs, editBookById, getBookById, deleteBookById } = useBooks();

  useEffect(() => {
    (async () => {
      const shelfs = await getShelfs();
      setDidMounted(true);
      if (didMounted) {
        setShelfs(shelfs);
      } else {
        return null;
      }
    })();
  }, [getShelfs, didMounted]);

  const res = {};

  function update(target, src) {
    Object.keys(target).forEach(k => (res[k] = src.hasOwnProperty(k) ? src[k] : target[k]));
    return res;
  }

  const startReading = (id, bookToStart) => {
    editBookById(id, bookToStart);
    update(randomBook, bookToStart);
    setBooks(books);
    setIsAddedToCurrent(true);
  };

  const handleOpenBookCard = async id => {
    const book = await getBookById(id);
    setCurrentBook(book);
  };

  const deleteBook = id => {
    deleteBookById(id);
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        setIsRandomBook,
        setRandomBook,
        shelfs,
        setShelfs,
        currentBook,
        setCurrentBook,
        isAddedToCurrent,
        setIsAddedToCurrent,
        startReading,
        randomBook,
        isRandomBook,
        handleOpenBookCard,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
