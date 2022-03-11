import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledBookList, Wrapper, ListHeader } from './BookList.styles';
import { useBooks } from '../../hooks/useBooks';
import Modal from '../Modal/Modal';
import RandomBook from '../RandomBook/RandomBook';
import PropTypes from 'prop-types';
import GridListToggleButton from '../Buttons/GridListToggleButton';
import RandomBookButton from '../Buttons/RandomBookButton';
import { ReactComponent as RandomBookSvg } from '../../assets/images/random.svg';

const BooksList = ({ setIsAddedToCurrent, randomBook, startReading, isAddedToCurrent }) => {
  const { books, setBooks, setRandomBook, setIsRandomBook, shelfs } = useContext(BookContext);

  const [isList, setIsList] = useState(false);

  const [isRandomModalOpen, setIsRandomModalOpen] = useState(false);

  const { id } = useParams();
  const { getBooksByShelf } = useBooks();

  useEffect(() => {
    (async () => {
      const books = await getBooksByShelf(id);
      setBooks(books);
    })();
  }, [getBooksByShelf, id]);

  const shelfNames = {
    'to-read': 'Chcę przeczytać',
    read: 'Przeczytane',
    'currently-reading': 'Teraz czytam',
  };

  const getShelfName = shelf => {
    return shelfNames[shelf];
  };

  const handleOpenRandomModal = () => {
    getRandomBook();
    setIsRandomModalOpen(true);
  };

  const handleCloseRandomModal = () => {
    setIsRandomModalOpen(false);
  };

  const getRandomBook = () => {
    setIsAddedToCurrent(false);
    const toReadBase = books.filter(book => book.shelf === 'to-read');
    const random = toReadBase[Math.floor(Math.random() * toReadBase.length)];
    if (toReadBase.length > 0) {
      setRandomBook(random);
      setIsRandomBook(true);
    } else console.log('nie ma książek do przeczytania');
  };

  const toggleGridList = e => {
    setIsList(!isList);
  };

  return (
    <>
      <Wrapper>
        <ListHeader>
          <h3>{getShelfName(id) || getShelfName(shelfs[0])}</h3>
          {getShelfName(id) === 'Chcę przeczytać' ? (
            <RandomBookButton onClick={handleOpenRandomModal}>
              <RandomBookSvg />
            </RandomBookButton>
          ) : null}
          <GridListToggleButton onClick={toggleGridList} isList={isList}></GridListToggleButton>
        </ListHeader>

        <StyledBookList view={isList}>
          {books.map(book => (
            <>
              <Book isList={isList} key={book.id} book={book} />
            </>
          ))}
        </StyledBookList>

        <Modal isOpen={isRandomModalOpen} handleClose={handleCloseRandomModal}>
          <RandomBook
            randomBook={randomBook}
            startReading={startReading}
            handleClose={handleCloseRandomModal}
            isAddedToCurrent={isAddedToCurrent}
          />
        </Modal>
      </Wrapper>
    </>
  );
};

BooksList.propTypes = {
  setIsAddedToCurrent: PropTypes.func,
  randomBook: PropTypes.object,
  startReading: PropTypes.func,
  isAddedToCurrent: PropTypes.bool,
};

export default BooksList;
