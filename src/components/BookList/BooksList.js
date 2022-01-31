import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';
import '../../index.css';
import grid from '../../assets/grid.png';
import list from '../../assets/list.png';
import BookContext from '../../contexts/BookContext';
import { StyledBookList, Wrapper, ListHeader } from './BookList.styles';
import { useBooks } from '../../hooks/useBooks';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';

const BooksList = () => {
  const { books, setBooks, shelfs, currentBook, setCurrentBook } = useContext(BookContext);

  const [isList, setIsList] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const { id } = useParams();
  const { getBooksByShelf, deleteBookById } = useBooks();
  const { handleOpenModal, handleCloseModal, isOpen } = useModal();

  useEffect(() => {
    (async () => {
      const books = await getBooksByShelf(id);
      setBooks(books);
    })();
  }, [getBooksByShelf, id]);

  const changeToListView = () => {
    setIsList(true);
  };

  const changeToGridView = () => {
    setIsList(false);
  };

  const shelfNames = {
    'to-read': 'Chcę przeczytać',
    read: 'Przeczytane',
    'currently-reading': 'Teraz czytam',
  };

  const getShelfName = shelf => {
    return shelfNames[shelf];
  };

  const deleteBook = id => {
    deleteBookById(id);
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
    handleCloseModal();
  };

  const handleRemove = book => {
    setCurrentBook(book);
    handleOpenModal();
  };

  return (
    <>
      <Wrapper>
        <ListHeader>
          <h3>{getShelfName(id) || getShelfName(shelfs[0])}</h3>
          <div className='listViewButtons'>
            <button onClick={changeToGridView} disabled={!isList}>
              {<img src={grid} alt='grid' />}
            </button>
            <button onClick={changeToListView} disabled={isList}>
              {<img src={list} alt='list' />}
            </button>
          </div>
        </ListHeader>

        <StyledBookList view={isList}>
          {books.map(book => (
            <>
              <Book isList={isList} key={book.id} book={book} onDelete={handleRemove} />
            </>
          ))}
        </StyledBookList>

        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <DeleteModal
            book={currentBook.title}
            handleDeleteBook={() => deleteBook(currentBook.id)}
            handleCloseDeleteModal={handleCloseModal}
          />
        </Modal>
      </Wrapper>
    </>
  );
};

export default BooksList;
