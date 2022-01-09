import React, { useContext, useState, useRef } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import BookCard from '../BookCard/BookCard';
import { StyledButton, StyledGridBook, StyledListBook } from './Book.styles';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import { useBooks } from '../../hooks/useBooks';
import { useParams } from 'react-router-dom';

const Book = ({ book, onDelete, isList }) => {
  const ref = useRef();

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  // const [bookCard, setBookCard] = useState(null);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [currentBook, setCurrentBook] = useState(0);
  const [isVisible, setIsVisible] = useState('none');

  const { getBookById } = useBooks();
  const { id } = useParams();

  const { books } = useContext(BookContext);

  const hasCover = () => {
    if (book.cover !== '') {
      return true;
    }
  };

  const handleOpenBookCard = async id => {
    const book = await getBookById(id);
    const bookIndex = books.findIndex(book => book.id === id);
    setCurrentBook(book);
    setCurrentBookIndex(bookIndex);
    handleOpenModal();
  };

  const handleClose = () => {
    handleCloseModal();
  };

  function handleNextBook() {
    const nextBookIndex = (currentBookIndex + 1) % books.length;
    setCurrentBookIndex(nextBookIndex);
    setCurrentBook(books[currentBookIndex]);
  }

  function handlePrevBook() {
    const prevBookIndex = (currentBookIndex + books.length - 1) % books.length;
    setCurrentBookIndex(prevBookIndex);
    setCurrentBook(books[currentBookIndex]);
  }

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
          <div className='bookWrapper' onClick={() => handleOpenBookCard(book.id)}>
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
          <StyledButton isVisible={isVisible} onClick={onDelete}>
            X
          </StyledButton>
        </StyledListBook>
      ) : (
        <StyledGridBook onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
          {hasCover() ? (
            <>
              <div className='bookWrapper' onClick={() => handleOpenBookCard(book.id)}>
                <img alt='book cover' src={book.cover} className='bookCover' />
              </div>
              <StyledButton isVisible={isVisible} onClick={onDelete}>
                X
              </StyledButton>
            </>
          ) : (
            <>
              <div className='bookWrapper' onClick={() => handleOpenBookCard(book.id)}>
                <div className='noCover'>
                  <p>{book.title}</p>
                  <p>{book.author}</p>
                </div>
              </div>
              <StyledButton isVisible={isVisible} onClick={onDelete}>
                X
              </StyledButton>
            </>
          )}
        </StyledGridBook>
      )}

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <BookCard
          onDelete={onDelete}
          book={currentBook}
          hasCover={hasCover}
          handlePrevBook={handlePrevBook}
          handleNextBook={handleNextBook}
        />
      </Modal>
    </div>
  );
};
export default Book;
