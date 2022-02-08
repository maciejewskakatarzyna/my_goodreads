import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';
import '../../index.css';
import grid from '../../assets/grid.png';
import list from '../../assets/list.png';
import BookContext from '../../contexts/BookContext';
import { StyledBookList, Wrapper, ListHeader } from './BookList.styles';
import { useBooks } from '../../hooks/useBooks';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';
import shuffle from '../../assets/shuffle.png';
import RandomBook from '../RandomBook/RandomBook';

const BooksList = ({ setIsAddedToCurrent, randomBook, startReading, isAddedToCurrent }) => {
  const { books, setBooks, setRandomBook, setIsRandomBook, shelfs, currentBook, setCurrentBook } =
    useContext(BookContext);

  const [isList, setIsList] = useState(false);

  const [isRandomModalOpen, setIsRandomModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { id } = useParams();
  const { getBooksByShelf, deleteBookById } = useBooks();

  useEffect(() => {
    (async () => {
      const books = await getBooksByShelf(id);
      setBooks(books);
    })();
  }, [getBooksByShelf, id]);

  const changeToListView = () => {
    setIsList(true);
  };

  const changeToGridView = () => {
    setIsList(false);
  };

  const shelfNames = {
    'to-read': 'Chcę przeczytać',
    read: 'Przeczytane',
    'currently-reading': 'Teraz czytam',
  };

  const getShelfName = shelf => {
    return shelfNames[shelf];
  };

  const deleteBook = id => {
    deleteBookById(id);
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
    handleCloseDeleteModal();
  };

  const handleRemove = book => {
    setCurrentBook(book);
    setIsDeleteModalOpen(true);
  };

  const handleOpenRandomModal = () => {
    getRandomBook();
    setIsRandomModalOpen(true);
  };

  const handleCloseRandomModal = () => {
    setIsRandomModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
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

  return (
    <>
      <Wrapper>
        <ListHeader>
          <h3>{getShelfName(id) || getShelfName(shelfs[0])}</h3>
          {getShelfName(id) === 'Chcę przeczytać' ? (
            <button className='icon' onClick={handleOpenRandomModal}>
              <img alt='shuffle' src={shuffle} />
            </button>
          ) : null}
          <div className='listViewButtons'>
            <button onClick={changeToGridView} disabled={!isList}>
              {<img src={grid} alt='grid' />}
            </button>
            <button onClick={changeToListView} disabled={isList}>
              {<img src={list} alt='list' />}
            </button>
          </div>
        </ListHeader>

        <StyledBookList view={isList}>
          {books.map(book => (
            <>
              <Book isList={isList} key={book.id} book={book} onDelete={handleRemove} />
            </>
          ))}
        </StyledBookList>

        <Modal isOpen={isDeleteModalOpen} handleClose={handleCloseDeleteModal}>
          <DeleteModal
            book={currentBook.title}
            handleDeleteBook={() => deleteBook(currentBook.id)}
            handleCloseDeleteModal={handleCloseDeleteModal}
          />
        </Modal>

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

export default BooksList;
