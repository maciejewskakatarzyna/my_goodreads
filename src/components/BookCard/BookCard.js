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
import { useNavigate } from 'react-router';
import EditBookForm from '../EditBookForm/EditBookForm';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';
import BasicButton from '../Buttons/BasicButton';
import { ReactComponent as BookShelfSvg } from '../../assets/images/bookshelf.svg';
import { ShelfButton } from '../Buttons/ShelfButton';
import ChangeShelfForm from '../ChangeShelfForm/ChangeShelfForm';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BooksContext } from '../../providers/BooksProvider';

const BookCard = () => {
  const {
    currentBook,
    currentBook: { id, title, author, publisher, yearPublished, shelf, genre, cover },
    deleteBook,
  } = useContext(BooksContext);
  const navigate = useNavigate();

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isShelfModalOpen, setIsShelfModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRemove = () => {
    setIsDeleteModalOpen(true);
  };

  const handleOpenEditForm = async => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleOpenShelfModal = async => {
    setIsShelfModalOpen(true);
  };

  const handleCloseShelfModal = () => {
    setIsShelfModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
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

  const deleteBookWithNav = id => {
    deleteBook(id);
    navigate(-1);
  };

  return (
    <StyledBookCard>
      <>
        <div>
          <img
            src={cover}
            onError={() => setIsError(true)}
            alt='book cover'
            style={isError ? imgErrorStyles : imgNoErrorStyles}
          />
          {isError && <div className='noCover'></div>}
        </div>
        <StyledBookDetails>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthor>by {author}</StyledAuthor>
          <StyledPublisher>
            Published by: <br /> {publisher}, {yearPublished}
          </StyledPublisher>
          <StyledGenre>{genre}</StyledGenre>
          <StyledShelfName>
            <ShelfButton title='Change book shelf' onClick={() => handleOpenShelfModal()}>
              <BookShelfSvg />
            </ShelfButton>
            <p data-testid='shelfName'>{getShelfName(shelf)}</p>
          </StyledShelfName>
          <ButtonsWrapper>
            <BasicButton onClick={handleOpenEditForm} data-testid='changeShelfButton'>
              Edit
            </BasicButton>
            <BasicButton onClick={handleRemove}>Delete</BasicButton>
          </ButtonsWrapper>
        </StyledBookDetails>
      </>

      <Modal
        appElement={document.getElementById('root')}
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        width={isDesktop || isTablet ? '500px' : '300px'}
        height='400px'
      >
        <EditBookForm book={currentBook} handleClose={handleCloseEditModal} />
      </Modal>

      <Modal
        appElement={document.getElementById('root')}
        isOpen={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        width='300px'
        height='200px'
      >
        <DeleteModal
          book={title}
          handleDeleteBook={() => deleteBookWithNav(id)}
          handleCloseDeleteModal={handleCloseDeleteModal}
        />
      </Modal>

      <Modal
        appElement={document.getElementById('root')}
        isOpen={isShelfModalOpen}
        handleClose={handleCloseShelfModal}
        width={isDesktop || isTablet ? '350px' : '300px'}
        height='300px'
      >
        <ChangeShelfForm book={currentBook} handleCloseShelfModal={handleCloseShelfModal} />
      </Modal>
    </StyledBookCard>
  );
};

export default BookCard;
