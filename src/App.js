import './index.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import BooksList from './components/BookList/BooksList';
import BookContext from './contexts/BookContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useBooks } from './hooks/useBooks';
import BookCard from './components/BookCard/BookCard';
import HeroImage from './components/HeroImage/HeroImage';
import { useForm } from 'react-hook-form';
import { useAuth } from './hooks/useAuth';
import FormField from './components/Form/FormField';
import { Wrapper, Form } from './components/Form/FormField.styles';
import BasicButton from './components/Buttons/BasicButton';

const AuthenticatedApp = () => {
  const [books, setBooks] = useState([]);
  const [randomBook, setRandomBook] = useState(null);
  const [isRandomBook, setIsRandomBook] = useState(false);
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [shelfs, setShelfs] = useState([]);
  const [currentBook, setCurrentBook] = useState(0);

  const { getShelfs, editBookById } = useBooks();

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

        <div className='wrapper'>
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
        </div>
      </BookContext.Provider>
    </div>
  );
};

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          margin: '100px 0 30px 0',
        }}
      >
        MyGoodreads
      </h1>
      <h2
        style={{
          marginBottom: '100px',
        }}
      >
        Zaloguj się do aplikacji
      </h2>
      <Wrapper>
        <Form
          onSubmit={handleSubmit(auth.signIn)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <FormField
            label='login'
            name='login'
            id='login'
            placeholder='login'
            {...register('login', { required: true })}
          />
          {errors.login && <span>Login is required</span>}
          <FormField
            label='password'
            name='password'
            id='password'
            type='password'
            placeholder='password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>Password is required</span>}
          <BasicButton type='submit'>Sign in</BasicButton>
        </Form>
      </Wrapper>
    </div>
  );
};

const App = () => {
  const auth = useAuth();

  return <Router>{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Router>;
};

export default App;
