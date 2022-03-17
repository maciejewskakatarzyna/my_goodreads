import React, { useState, useContext } from 'react';
import {
  StyledBookCard,
  ButtonsWrapper,
  StyledBookDetails,
  StyledTitle,
  StyledAuthor,
  StyledPublisher,
  StyledShelfName,
  StyledGenre,
} from './BookCard.styles';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';
import { useNavigate } from 'react-router';
import useModal from '../Modal/useModal';
import EditBookForm from '../EditBookForm/EditBookForm';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';
import BasicButton from '../Buttons/BasicButton';
import { ReactComponent as BookShelfSvg } from '../../assets/images/bookshelf.svg';

const BookCard = () => {
  const { currentBook, books, setBooks } = useContext(BookContext);
  const { deleteBookById } = useBooks();
  const navigate = useNavigate();

  const { handleOpenModal, handleCloseModal } = useModal();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRemove = () => {
    setIsDeleteModalOpen(true);
  };

  const handleOpenEditForm = async => {
    setIsEditModalOpen(true);
    handleOpenModal();
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    handleCloseModal();
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    handleCloseModal();
  };

  const deleteBook = id => {
    deleteBookById(id);
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
    handleCloseModal();
    navigate(-1);
  };

  const imgErrorStyles = {
    display: 'none',
  };

  const imgNoErrorStyles = {
    display: 'block',
  };

  const shelfNames = {
    'to-read': 'To read',
    read: 'Read',
    'currently-reading': 'Currently reading',
  };

  const getShelfName = shelf => {
    return shelfNames[shelf];
  };

  return (
    <StyledBookCard>
      <>
        <div>
          <img
            src={currentBook.cover}
            onError={() => setIsError(true)}
            alt='book cover'
            style={isError ? imgErrorStyles : imgNoErrorStyles}
          />
          {isError && <div className='noCover'></div>}
        </div>
        <StyledBookDetails>
          <StyledTitle>{currentBook.title}</StyledTitle>
          <StyledAuthor>by {currentBook.author}</StyledAuthor>
          <StyledPublisher>
            Published by: <br /> {currentBook.publisher}, {currentBook.yearPublished}
          </StyledPublisher>
          <StyledGenre>{currentBook.genre}</StyledGenre>
          <StyledShelfName>
            <BookShelfSvg />
            <p>{getShelfName(currentBook.shelf)}</p>
          </StyledShelfName>

          <ButtonsWrapper>
            <BasicButton onClick={() => handleOpenEditForm(currentBook.id)}>Edit</BasicButton>
            <BasicButton onClick={() => handleRemove(currentBook.id)}>Delete</BasicButton>
          </ButtonsWrapper>
        </StyledBookDetails>
      </>

      <Modal
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        width='500px'
        height='400px'
      >
        <EditBookForm book={currentBook} handleClose={handleCloseEditModal} />
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        width='300px'
        height='200px'
      >
        <DeleteModal
          book={currentBook.title}
          handleDeleteBook={() => deleteBook(currentBook.id)}
          handleCloseDeleteModal={handleCloseDeleteModal}
        />
      </Modal>
    </StyledBookCard>
  );
};

export default BookCard;
