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
import { Wrapper, Form, Error } from './components/Form/FormField.styles';
import BasicButton from './components/Buttons/BasicButton';
import { useNavigate } from 'react-router';

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
        Sign in to application
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
            label='email'
            name='email'
            id='email'
            placeholder='email'
            isError={errors.email}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email is invalid',
              },
            })}
          />
          {errors.email ? (
            <>
              {errors.email.type === 'required' && <Error>{errors.email.message}</Error>}
              {errors.email.type === 'pattern' && <Error>{errors.email.message}</Error>}
            </>
          ) : null}
          <FormField
            label='password'
            name='password'
            id='password'
            type='password'
            placeholder='password'
            isError={errors.password}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && errors.password.type === 'required' && (
            <Error>{errors.password.message}</Error>
          )}
          <BasicButton isError={errors.email || errors.password} type='submit'>
            Sign in
          </BasicButton>
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
