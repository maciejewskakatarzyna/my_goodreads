import './index.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import RandomBook from './components/RandomBook/RandomBook';
import BooksList from './components/BookList/BooksList';
import BookContext from './contexts/BookContext';
import AddBookForm from './components/AddBookForm/AddBookForm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [books, setBooks] = useState([]);
  const [randomBook, setRandomBook] = useState(null);
  const [isRandomBook, setIsRandomBook] = useState(false);
  const [base, setBase] = useState({ items: books, name: 'Wszystkie książki' });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false);
  const [isBookAdded, setIsBookAdded] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [shelfs, setShelfs] = useState([]);

  const handleClose = modal => {
    if (modal === 'randomBookModal') {
      setIsRandomBook(false);
    } else if (modal === 'addFormModal') {
      setIsFormVisible(false);
    } else if (modal === 'addConfirmModal') {
      setIsFormVisible(false);
    }
  };

  return (
    <Router>
      <div>
        <BookContext.Provider
          value={{
            base: base,
            setBase: setBase,
            books: books,
            setBooks: setBooks,
            setIsRandomBook: setIsRandomBook,
            setRandomBook: setRandomBook,
            filteredBooks: filteredBooks,
            setFilteredBooks: setFilteredBooks,
            shelfs: shelfs,
            setShelfs: setShelfs,
          }}
        >
          <Header
            setBase={setBase}
            setIsFormVisible={setIsFormVisible}
            setIsAddedToCurrent={setIsAddedToCurrent}
            setIsBookAdded={setIsBookAdded}
          />
          <div className='wrapper'>
            {isRandomBook ? (
              <RandomBook
                randomBook={randomBook}
                onClose={() => handleClose('randomBookModal')}
                isAddedToCurrent={isAddedToCurrent}
              />
            ) : null}
            <Routes>
              <Route path='/' element={<Navigate to='/shelf' />} />
              <Route
                path='/add-book'
                element={
                  <AddBookForm
                    onClose={() => handleClose('addFormModal')}
                    setIsBookAdded={setIsBookAdded}
                    isBookAdded={isBookAdded}
                    onCloseConfirm={() => handleClose('addConfirmModal')}
                  />
                }
              />
              <Route path='/shelf/' element={<BooksList handleClose={handleClose} />} />
              <Route path='/shelf/:shelf' element={<BooksList handleClose={handleClose} />} />
            </Routes>
          </div>
        </BookContext.Provider>
      </div>
    </Router>
  );
};

export default App;
