import './index.css';
import React from 'react';
import { useEffect, useState } from 'react';
import BooksAPI from './api';
import Header from './components/Header/Header';
import RandomBook from './components/RandomBook/RandomBook';
import BooksList from './components/BookList/BooksList';
import BookContext from './contexts/BookContext';
import AddBookForm from './components/AddBookForm/AddBookForm';
import ModalDialog from './components/ModalDialog/ModalDialog';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  const [books, setBooks] = useState([]);
  // const [booksToRead, setBooksToRead] = useState(books.filter(item => item.exclusiveShelf === 'to-read'))
  // const [booksRead, setBooksRead] = useState(books.filter(item => item.exclusiveShelf === 'read'))
  // const [currentBooks, setCurrentBooks] = useState(books.filter(item => item.exclusiveShelf === 'currently-reading'))
  const [randomBook, setRandomBook] = useState(null);
  const [isRandomBook, setIsRandomBook] = useState(false);
  const [base, setBase] = useState({ items: books, name: 'Wszystkie książki' });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false);
  const [isBookAdded, setIsBookAdded] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  //
  // useEffect( () => {
  //   BooksAPI.getAllBooks().then(all => {
  //     setBooks(all)})
  // },[]);

  const handleClose = modal => {
    if (modal === 'randomBookModal') {
      setIsRandomBook(false);
    } else if (modal === 'addFormModal') {
      setIsFormVisible(false);
    } else if (modal === 'addConfirmModal') {
      setIsFormVisible(false);
    }
  };

  const updateBook = (indexToUpdate, bookToUpdate) => {
    BooksAPI.replaceBook(bookToUpdate).then(updatedBook => {
      const booksUpdated = books.map((book, index) =>
        index === indexToUpdate ? updatedBook : book
      );
      setBooks(booksUpdated);
      return { booksUpdated };
    });
  };

  const startReading = randomBook => {
    updateBook(randomBook.id, { ...randomBook, exclusiveShelf: 'currently-reading' });
    setIsAddedToCurrent(true);
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
            updateBook: updateBook,
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
                startReading={() => startReading(randomBook)}
                onClose={() => handleClose('randomBookModal')}
                isAddedToCurrent={isAddedToCurrent}
              />
            ) : null}
            <Routes>
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
              ></Route>
              <Route
                path='/:shelf'
                element={<BooksList handleUpdateBook={updateBook} handleClose={handleClose} />}
              ></Route>
            </Routes>
          </div>
        </BookContext.Provider>
      </div>
    </Router>
  );
};

export default App;
