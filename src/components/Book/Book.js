import React, { useContext, useState, useRef } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledButton, StyledGridBook, StyledListBook } from './Book.styles';
import useModal from '../Modal/useModal';
import { useBooks } from '../../hooks/useBooks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteModal from '../Modal/DeleteModal';
import Modal from '../Modal/Modal';

const Book = ({ book: { id, title, author, cover }, isList }) => {
  const ref = useRef();

  const [isVisible, setIsVisible] = useState('none');
  const [isError, setIsError] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { getBookById, deleteBookById } = useBooks();
  const { handleCloseModal } = useModal();

  const { setCurrentBook, books, setBooks } = useContext(BookContext);

  const handleOpenBookCard = async id => {
    const book = await getBookById(id);
    setCurrentBook(book);
  };

  const showButton = e => {
    e.preventDefault();
    setIsVisible('block');
  };

  const hideButton = e => {
    e.preventDefault();
    setIsVisible('none');
  };

  const imgErrorStyles = {
    display: 'none',
  };

  const imgNoErrorStyles = {
    display: 'block',
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    handleCloseModal();
  };

  const handleRemove = () => {
    setIsDeleteModalOpen(true);
  };

  const deleteBook = id => {
    deleteBookById(id);
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
    handleCloseModal();
  };

  return (
    <div ref={ref}>
      {isList ? (
        <StyledListBook onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
          <Link className='bookWrapper' to={`/books/${id}`} onClick={() => handleOpenBookCard(id)}>
            <p>{title}</p>
            <p>{author}</p>
          </Link>
          <StyledButton isVisible={isVisible} onClick={() => handleRemove(id)}>
            X
          </StyledButton>
        </StyledListBook>
      ) : (
        <StyledGridBook onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
          <>
            <Link
              className='bookWrapper'
              to={`/books/${id}`}
              onClick={() => handleOpenBookCard(id)}
            >
              <img
                src={cover}
                onError={() => setIsError(true)}
                alt='book cover'
                style={isError ? imgErrorStyles : imgNoErrorStyles}
              />
              <div className={isError ? 'noCover' : 'hasCover'}>
                <p>{title}</p>
                <p>{author}</p>
              </div>
            </Link>
            <StyledButton isVisible={isVisible} onClick={() => handleRemove(id)}>
              X
            </StyledButton>
          </>
        </StyledGridBook>
      )}
      <Modal isOpen={isDeleteModalOpen} handleClose={handleCloseDeleteModal}>
        <DeleteModal
          book={title}
          handleDeleteBook={() => deleteBook(id)}
          handleCloseDeleteModal={handleCloseDeleteModal}
        />
      </Modal>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string,
  }),
  isList: PropTypes.bool,
};

export default Book;
