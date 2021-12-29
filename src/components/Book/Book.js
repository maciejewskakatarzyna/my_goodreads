import React, { useContext, useState, useRef, useEffect } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import ModalDialog from '../ModalDialog/ModalDialog';
import BookCard from '../BookCard/BookCard';
import { StyledButton, StyledGridBook, StyledListBook } from './Book.styles';

const Book = ({ book, onDelete, isList }) => {
  const ref = useRef();

  const [isBookCard, setIsBookCard] = useState(false);
  const [bookCard, setBookCard] = useState(null);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isVisible, setIsVisible] = useState('none');

  const { books } = useContext(BookContext);

  const hasCover = () => {
    if (book.cover !== '') {
      return true;
    }
  };

  const handleShowCard = index => {
    const bookCardItem = books.filter(book => book.id === index);
    setBookCard(bookCardItem[0]);
    const bookIndex = books.findIndex(book => book.id === index);
    if (bookIndex >= 0) {
      setCurrentBookIndex(bookIndex);
    }
    setIsBookCard(true);
  };

  const handleClose = () => {
    setIsBookCard(false);
  };

  function handleNextBook() {
    const nextBookIndex = (currentBookIndex + 1) % books.length;
    setCurrentBookIndex(nextBookIndex);
    setBookCard(books[currentBookIndex]);
  }

  function handlePrevBook() {
    const prevBookIndex = (currentBookIndex + books.length - 1) % books.length;
    setCurrentBookIndex(prevBookIndex);
    setBookCard(books[currentBookIndex]);
  }

  const showButton = e => {
    e.preventDefault();
    setIsVisible('block');
  };

  const hideButton = e => {
    e.preventDefault();
    setIsVisible('none');
  };

  // useEffect(() => {
  //     const checkIfClickedOutside = e => {
  //
  //         if (isBookCard && ref.current && !ref.current.contains(e.target)) {
  //             setIsBookCard(false)
  //             console.log(e.target)
  //             console.log(ref.current)
  //         }
  //     }
  //
  //     document.addEventListener("mousedown", checkIfClickedOutside)
  //
  //     return () => {
  //         document.removeEventListener("mousedown", checkIfClickedOutside)
  //     }
  // }, [isBookCard])

  return (
    <div ref={ref}>
      {isList ? (
        <StyledListBook onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
          <div className='bookWrapper' onClick={() => handleShowCard(book.id)}>
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
              <div className='bookWrapper' onClick={() => handleShowCard(book.id)}>
                <img alt='book cover' src={book.cover} className='bookCover' />
              </div>
              <StyledButton isVisible={isVisible} onClick={onDelete}>
                X
              </StyledButton>
            </>
          ) : (
            <>
              <div className='bookWrapper' onClick={() => handleShowCard(book.id)}>
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

      {isBookCard && (
        <ModalDialog>
          <BookCard
            onDelete={onDelete}
            onClose={handleClose}
            book={bookCard}
            hasCover={hasCover}
            handlePrevBook={handlePrevBook}
            handleNextBook={handleNextBook}
          />
        </ModalDialog>
      )}
    </div>
  );
};
export default Book;
