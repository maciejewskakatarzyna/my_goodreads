import React, { useContext, useState, useRef } from 'react';
import '../../index.css';
import { StyledGridBook, StyledListBook } from './Book.styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteModal from '../Modal/DeleteModal';
import Modal from '../Modal/Modal';
import { ReactComponent as DeleteBookSvg } from '../../assets/images/delete.svg';
import { DeleteButton } from '../Buttons/DeleteButton';
import { BooksContext } from '../../providers/BooksProvider';

const Book = ({ book: { id, title, author, cover }, isList }) => {
  const ref = useRef();

  const [isVisible, setIsVisible] = useState('none');
  const [isError, setIsError] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { handleOpenBookCard, deleteBook } = useContext(BooksContext);

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
  };

  const handleRemove = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <div ref={ref}>
      {isList ? (
        <StyledListBook onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
          <Link className='bookWrapper' to={`/books/${id}`} onClick={() => handleOpenBookCard(id)}>
            <p>{title}</p>
            <p>{author}</p>
          </Link>
          <DeleteButton isVisible={isVisible} isDark={isList} onClick={handleRemove}>
            <DeleteBookSvg />
          </DeleteButton>
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
                <div className='infoWrapper'>
                  <p>{title}</p>
                  <p>{author}</p>
                </div>
              </div>
            </Link>
            <DeleteButton isVisible={isVisible} data-testid='deleteButton' onClick={handleRemove}>
              <DeleteBookSvg />
            </DeleteButton>
          </>
        </StyledGridBook>
      )}
      <Modal
        isOpen={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        width='300px'
        height='200px'
      >
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
