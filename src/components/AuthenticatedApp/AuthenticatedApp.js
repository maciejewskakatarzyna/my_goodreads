import React from 'react';
import Header from '../Header/Header';
import HeroImage from '../HeroImage/HeroImage';
import { Navigate, Route, Routes } from 'react-router-dom';
import BooksList from '../BooksList/BooksList';
import BookCard from '../BookCard/BookCard';
import { Wrapper } from './AuthenticatedApp.style';

const AuthenticatedApp = () => {
  return (
    <>
      <Header />
      <HeroImage />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Navigate to='/shelfs' />} />
          <Route path='/shelfs/' element={<Navigate to='/shelfs/to-read' />} />
          <Route path='/shelfs/' element={<BooksList />} />
          <Route path='/shelfs/:id' element={<BooksList />} />
          <Route path='/books/:id' element={<BookCard />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default AuthenticatedApp;
