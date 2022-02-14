import './index.css';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Header from './components/Header/Header';
import RandomBook from './components/RandomBook/RandomBook';
import BooksList from './components/BookList/BooksList';
import BookContext from './contexts/BookContext';
import AddBookForm from './components/AddBookForm/AddBookForm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useBooks } from './hooks/useBooks';
import BookCard from './components/BookCard/BookCard';
import HeroImage from './components/HeroImage/HeroImage';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from './hooks/useAuth';

const AuthenticatedApp = () => {
  const [books, setBooks] = useState([]);
  const [randomBook, setRandomBook] = useState(null);
  const [isRandomBook, setIsRandomBook] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [shelfs, setShelfs] = useState([]);
  const [currentBook, setCurrentBook] = useState(0);

  const { getShelfs, editBookById } = useBooks();

  const handleClose = modal => {
    setIsFormVisible(false);
  };

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
  };

  // const handleScrollDown = () => {
  //   window.scrollBy({
  //     top: window.innerHeight,
  //     behavior: 'smooth',
  //   });
  // };

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
        <Header setIsFormVisible={setIsFormVisible} />
        <HeroImage />

        <div className='wrapper'>
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
        </div>
      </BookContext.Provider>
    </div>
  );
};

const UnauthenticatedApp = ({ handleSignIn }) => {
  const login = useRef(null);
  const password = useRef(null);

  return (
    <form
      onSubmit={handleSignIn}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <label>
        Login
        <input type='text' ref={login} />
      </label>

      <label>
        Hasło
        <input ref={password} />
      </label>

      <button type='submit'>Zaloguj</button>
    </form>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async ({ login, password, event }) => {
    event.preventDefault();

    login = login.current.value;
    password = password.current.value;

    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      console.log('try');
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      setError('Please provide valid user data');
    }
  };

  return (
    <Router>
      {/*{user ? <AuthenticatedApp /> : <UnauthenticatedApp handleSignIn={handleSignIn} />}*/}

      <AuthenticatedApp />
    </Router>
  );
};

export default App;
