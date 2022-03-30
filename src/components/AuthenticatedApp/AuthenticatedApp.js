import React, { useEffect, useState } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { useNavigate } from 'react-router';
import BookContext from '../../contexts/BookContext';
import Header from '../Header/Header';
import HeroImage from '../HeroImage/HeroImage';
import { Navigate, Route, Routes } from 'react-router-dom';
import BooksList from '../BookList/BooksList';
import BookCard from '../BookCard/BookCard';
import { Wrapper } from './AuthenticatedApp.style';

const AuthenticatedApp = () => {
  const [books, setBooks] = useState([]);
  const [randomBook, setRandomBook] = useState(null);
  const [isRandomBook, setIsRandomBook] = useState(false);
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [shelfs, setShelfs] = useState([]);
  const [currentBook, setCurrentBook] = useState(0);

  const { getShelfs, editBookById } = useBooks();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const shelfs = await getShelfs();
      setShelfs(shelfs);
    })();
  }, [getShelfs]);

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
    navigate('/shelfs/currently-reading');
  };

  return (
    <div>
      <BookContext.Provider
        value={{
          books: books,
          setBooks: setBooks,
          setIsRandomBook: setIsRandomBook,
          setRandomBook: setRandomBook,
          filteredBooks: filteredBooks,
          setFilteredBooks: setFilteredBooks,
          shelfs: shelfs,
          setShelfs: setShelfs,
          currentBook: currentBook,
          setCurrentBook: setCurrentBook,
        }}
      >
        <Header />
        <HeroImage />
        <Wrapper>
          <Routes>
            <Route path='/' element={<Navigate to='/shelfs' />} />
            <Route path='/shelfs/' element={<Navigate to='/shelfs/to-read' />} />
            <Route
              path='/shelfs/'
              element={
                <BooksList
                  setIsAddedToCurrent={setIsAddedToCurrent}
                  randomBook={randomBook}
                  isAddedToCurrent={isAddedToCurrent}
                  startReading={startReading}
                  setIsRandomBook={setIsRandomBook}
                />
              }
            />
            <Route
              path='/shelfs/:id'
              element={
                <BooksList
                  setIsAddedToCurrent={setIsAddedToCurrent}
                  randomBook={randomBook}
                  isAddedToCurrent={isAddedToCurrent}
                  startReading={startReading}
                  setIsRandomBook={setIsRandomBook}
                />
              }
            />
            <Route path='/books/:id' element={<BookCard />} />
          </Routes>
        </Wrapper>
      </BookContext.Provider>
    </div>
  );
};

export default AuthenticatedApp;
