import React, { useState, useContext } from 'react';
import { StyledBookCard } from './BookCard.styles';
import { ButtonsWrapper, StyledBookDetails } from './BookDetails.styles';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';
import { useNavigate } from 'react-router';
import useModal from '../Modal/useModal';
import EditBookForm from '../EditBookForm/EditBookForm';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';
import BasicButton from '../Buttons/BasicButton';

const BookCard = () => {
  const { currentBook, books, setBooks } = useContext(BookContext);
  const { deleteBookById } = useBooks();
  const navigate = useNavigate();

  const { handleOpenModal, handleCloseModal } = useModal();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // const { updateBook } = useContext(BookContext);

  // const [selectedOption, setSelectedOption] = useState(0);

  // const options = [
  //   {
  //     value: 'to-read',
  //     label: 'Chcę przeczytać',
  //   },
  //   {
  //     value: 'read',
  //     label: 'Przeczytana',
  //   },
  //   {
  //     value: 'currently-reading',
  //     label: 'Czytam',
  //   },
  // ];

  // const changeShelf = (book, shelf) => {
  //   updateBook(book.id, { ...book, exclusiveShelf: shelf });
  // };

  // const handleChange = e => {
  //   setSelectedOption(e.target.value);
  //   changeShelf(book, selectedOption);
  // };

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

  return (
    <StyledBookCard>
      <>
        <div className='coverWrapper'>
          {/*<div className='noCoverCard'></div>*/}
          <img src={currentBook.cover} alt='book cover' />
        </div>
        <StyledBookDetails>
          <p>{currentBook.title}</p>
          <p>{currentBook.author}</p>
          <p>{currentBook.yearPublished}</p>
          <p>{currentBook.publisher}</p>
          <p>{currentBook.shelf}</p>
          <p>{currentBook.genre}</p>
          {/*<div>*/}
          {/*  <select value={selectedOption} onChange={e => handleChange(e)}>*/}
          {/*    {options.map(o => (*/}
          {/*      <option key={o.value} value={o.value}>*/}
          {/*        {o.label}*/}
          {/*      </option>*/}
          {/*    ))}*/}
          {/*  </select>*/}
          {/*</div>*/}
          <ButtonsWrapper>
            <BasicButton onClick={() => handleOpenEditForm(currentBook.id)}>
              Edytuj książkę
            </BasicButton>
            <BasicButton onClick={() => handleRemove(currentBook.id)}>Usuń książkę</BasicButton>
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
