import './index.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import RandomBook from './components/RandomBook/RandomBook';
import BooksList from './components/BookList/BooksList';
import BookContext from './contexts/BookContext';
import AddBookForm from './components/AddBookForm/AddBookForm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useBooks } from './hooks/useBooks';
import BookCard from './components/BookCard/BookCard';

const App = () => {
  const [books, setBooks] = useState([]);
  const [randomBook, setRandomBook] = useState(null);
  const [isRandomBook, setIsRandomBook] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [shelfs, setShelfs] = useState([]);
  const [currentBook, setCurrentBook] = useState(0);

  const { getShelfs } = useBooks();

  const handleClose = modal => {
    if (modal === 'randomBookModal') {
      setIsRandomBook(false);
    } else if (modal === 'addFormModal') {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    (async () => {
      const shelfs = await getShelfs();
      setShelfs(shelfs);
    })();
  }, [getShelfs]);

  const startReading = () => {};

  return (
    <Router>
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
          <Header setIsFormVisible={setIsFormVisible} setIsAddedToCurrent={setIsAddedToCurrent} />
          <div className='wrapper'>
            {isRandomBook ? (
              <RandomBook
                randomBook={randomBook}
                onClose={() => handleClose('randomBookModal')}
                isAddedToCurrent={isAddedToCurrent}
                startReading={startReading}
              />
            ) : null}
            <Routes>
              <Route path='/' element={<Navigate to='/shelfs' />} />
              <Route
                path='/add-book'
                element={
                  <AddBookForm
                    onClose={() => handleClose('addFormModal')}
                    isConfirmVisible={isConfirmVisible}
                    setIsConfirmVisible={setIsConfirmVisible}
                    setIsFormVisible={setIsFormVisible}
                    isFormVisible={isFormVisible}
                  />
                }
              />
              <Route path='/shelfs/' element={<Navigate to='/shelfs/to-read' />} />
              <Route path='/shelfs/' element={<BooksList handleClose={handleClose} />} />
              <Route path='/shelfs/:id' element={<BooksList handleClose={handleClose} />} />
              <Route path='/books/:id' element={<BookCard />} />
            </Routes>
          </div>
        </BookContext.Provider>
      </div>
    </Router>
  );
};

export default App;
