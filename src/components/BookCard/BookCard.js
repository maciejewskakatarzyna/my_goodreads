import React, { useState, useContext } from 'react';
import { StyledBookCard } from './BookCard.styles';
import { StyledBookDetails } from './BookDetails.styles';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';
import { useNavigate } from 'react-router';
import useModal from '../Modal/useModal';
import EditBookForm from '../EditBookForm/EditBookForm';
import Modal from '../Modal/Modal';

const BookCard = ({ book }) => {
  const { currentBook, books, setBooks } = useContext(BookContext);
  const { deleteBookById } = useBooks();
  const navigate = useNavigate();

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

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

  const handleRemove = id => {
    deleteBookById(id);
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
    navigate(-1);
  };

  const handleOpenEditForm = async => {
    handleOpenModal();
  };

  const handleClose = () => {
    handleCloseModal();
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
          <p>{currentBook.myRating}</p>
          <p>{currentBook.averageRating}</p>
          {/*<div>*/}
          {/*  <select value={selectedOption} onChange={e => handleChange(e)}>*/}
          {/*    {options.map(o => (*/}
          {/*      <option key={o.value} value={o.value}>*/}
          {/*        {o.label}*/}
          {/*      </option>*/}
          {/*    ))}*/}
          {/*  </select>*/}
          {/*</div>*/}
          <button onClick={() => handleOpenEditForm(currentBook.id)}>Edytuj książkę</button>
          <button onClick={() => handleRemove(currentBook.id)}>Usuń książkę</button>
        </StyledBookDetails>
      </>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <EditBookForm book={currentBook} handleClose={handleClose} />
      </Modal>
    </StyledBookCard>
  );
};

export default BookCard;
