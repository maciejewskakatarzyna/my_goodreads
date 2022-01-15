import React, { useContext, useState, useRef } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledButton, StyledGridBook, StyledListBook } from './Book.styles';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import { useBooks } from '../../hooks/useBooks';
import EditBookForm from '../EditBookForm/EditBookForm';
import { Link } from 'react-router-dom';

const Book = ({ book, onDelete, isList }) => {
  const ref = useRef();

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [isVisible, setIsVisible] = useState('none');

  const { getBookById } = useBooks();

  const { currentBook, setCurrentBook } = useContext(BookContext);

  const hasCover = () => {
    if (book.cover !== '') {
      return true;
    }
  };

  const handleOpenBookCard = async id => {
    const book = await getBookById(id);
    setCurrentBook(book);
  };

  const handleOpenEditForm = async id => {
    const book = await getBookById(id);
    setCurrentBook(book);
    handleOpenModal();
  };

  const handleClose = () => {
    handleCloseModal();
  };

  const showButton = e => {
    e.preventDefault();
    setIsVisible('block');
  };

  const hideButton = e => {
    e.preventDefault();
    setIsVisible('none');
  };

  return (
    <div ref={ref}>
      {isList ? (
        <StyledListBook onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
          <Link
            className='bookWrapper'
            to={`/books/${book.id}`}
            onClick={() => handleOpenBookCard(book.id)}
          >
            <p>{book.title}</p>
            <p>{book.author}</p>
          </Link>
          <StyledButton isVisible={isVisible} onClick={() => onDelete(book.id)}>
            X
          </StyledButton>
        </StyledListBook>
      ) : (
        <StyledGridBook onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
          {hasCover() ? (
            <>
              <Link
                className='bookWrapper'
                to={`/books/${book.id}`}
                onClick={() => handleOpenBookCard(book.id)}
              >
                <img alt='book cover' src={book.cover} className='bookCover' />
              </Link>
              <StyledButton isVisible={isVisible} onClick={() => onDelete(book.id)}>
                X
              </StyledButton>
            </>
          ) : (
            <>
              <Link
                className='bookWrapper'
                to={`/books/${book.id}`}
                onClick={() => handleOpenBookCard(book.id)}
              >
                <div className='noCover'>
                  <p>{book.title}</p>
                  <p>{book.author}</p>
                </div>
              </Link>

              <StyledButton isVisible={isVisible} onClick={() => onDelete(book.id)}>
                X
              </StyledButton>
              <StyledButton
                style={{ left: '5px' }}
                isVisible={isVisible}
                onClick={() => handleOpenEditForm(book.id)}
              >
                Edytuj
              </StyledButton>
            </>
          )}
        </StyledGridBook>
      )}
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <EditBookForm book={currentBook} handleClose={handleClose} />
      </Modal>
    </div>
  );
};
export default Book;
