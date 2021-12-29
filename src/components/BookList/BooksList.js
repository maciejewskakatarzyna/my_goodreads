import React, { useContext, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';
import '../../index.css';
import grid from '../../assets/grid.png';
import list from '../../assets/list.png';
import BooksAPI from '../../api';
import BookContext from '../../contexts/BookContext';
import { StyledBookList, Wrapper } from './BookList.styles';
import axios from 'axios';

const BooksList = () => {
  const { books, setBooks, base, filteredBooks } = useContext(BookContext);

  const [isList, setIsList] = React.useState(false);

  const { shelf } = useParams();

  const getBooksByShelf = useCallback(async shelf => {
    try {
      const result = await axios.get(`http://localhost:4000/books`);
      console.log(result.data);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const booksByShelf = await getBooksByShelf(shelf);
      setBooks(booksByShelf);
    })();
  }, [getBooksByShelf, shelf]);

  const handleRemoveBook = index => {
    BooksAPI.removeBook(index).then(() => {
      const removed = books.filter(book => book.id !== index);
      setBooks(removed);
    });
  };

  const changeToListView = () => {
    setIsList(true);
  };

  const changeToGridView = () => {
    setIsList(false);
  };

  // const getBase = () => {
  //     let list
  //
  //     if(filteredBooks.length > 0) {
  //         list = <StyledBookList view={isList}>
  //             {filteredBooks.map(book => (
  //                 <Book isList={isList} key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)} />)
  //             )}
  //         </StyledBookList>
  //     }
  //     else {
  //         if (base.name === "Do przeczytania") {
  //             list = <StyledBookList view={isList}>
  //                 {books.filter(item => item.exclusiveShelf === 'to-read').map(book => (
  //                     <Book isList={isList} key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)} />)
  //                 )}
  //             </StyledBookList>
  //         } else if (base.name === "Przeczytane") {
  //             list = <StyledBookList view={isList}>
  //                 {books.filter(item => item.exclusiveShelf === 'read').map(book => (
  //                     <Book isList={isList} key={book.id} book={book}  onDelete={() => handleRemoveBook(book.id)} />)
  //                 )}
  //             </StyledBookList>}
  //         else if (base.name === "Aktualnie czytane") {
  //             list = <StyledBookList view={isList}>
  //                 {books.filter(item => item.exclusiveShelf === 'currently-reading').map(book => (
  //                     <Book isList={isList} key={book.id} book={book}  onDelete={() => handleRemoveBook(book.id)} />)
  //                 )}
  //             </StyledBookList>
  //         }
  //         else if (base.name === "Wszystkie książki") {
  //             list = <StyledBookList view={isList}>
  //                 {books.map(book => (
  //                     <Book isList={isList} key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)}/>)
  //                 )}
  //             </StyledBookList>
  //         }
  //     }
  //
  //     return list
  // }

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
            <Book
              isList={isList}
              key={book.id}
              book={book}
              onDelete={() => handleRemoveBook(book.id)}
            />
          ))}
        </StyledBookList>
      </Wrapper>

      {/*{getBase()}*/}
    </>
  );
};

export default BooksList;
