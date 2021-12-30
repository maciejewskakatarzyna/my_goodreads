import React, { useContext, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';
import '../../index.css';
import grid from '../../assets/grid.png';
import list from '../../assets/list.png';
import BookContext from '../../contexts/BookContext';
import { StyledBookList, Wrapper } from './BookList.styles';
import axios from 'axios';

const BooksList = () => {
  const { books, setBooks, base, filteredBooks, shelfs, setShelfs } = useContext(BookContext);

  const [isList, setIsList] = React.useState(false);

  const { shelf } = useParams();

  useEffect(() => {
    axios
      .get(`/shelfs`)
      .then(({ data }) => setShelfs(data.shelfs))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/books/${shelf || shelfs[0]}`)
      .then(({ data }) => setBooks(data.books))
      .catch(err => console.log(err));
  }, [shelf, shelfs]);

  const changeToListView = () => {
    setIsList(true);
  };

  const changeToGridView = () => {
    setIsList(false);
  };

  return (
    <>
      <Wrapper>
        <h3>{base.name}</h3>
        <div className='listViewButtons'>
          <button onClick={changeToGridView} disabled={!isList}>
            {<img src={grid} alt='grid' />}
          </button>
          <button onClick={changeToListView} disabled={isList}>
            {<img src={list} alt='list' />}
          </button>
        </div>
        <StyledBookList view={isList}>
          {books.map(book => (
            <Book isList={isList} key={book.id} book={book} />
          ))}
        </StyledBookList>
      </Wrapper>
    </>
  );
};

export default BooksList;
