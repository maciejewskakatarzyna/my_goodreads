import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';
import '../../index.css';
import { BooksContext } from '../../providers/BooksProvider';
import { StyledBooksList, Wrapper, ListHeader, ShelfName } from './BooksList.styles';
import { useBooks } from '../../hooks/useBooks';
import Modal from '../Modal/Modal';
import RandomBook from '../RandomBook/RandomBook';
import GridListToggleButton from '../Buttons/GridListToggleButton';
import RandomBookButton from '../Buttons/RandomBookButton';
import { ReactComponent as RandomBookSvg } from '../../assets/images/random.svg';

const BooksList = () => {
  const { books, setBooks, setRandomBook, setIsRandomBook, shelfs, setIsAddedToCurrent } =
    useContext(BooksContext);

  const [isList, setIsList] = useState(false);

  const [isRandomModalOpen, setIsRandomModalOpen] = useState(false);

  const { id } = useParams();
  const { getBooksByShelf } = useBooks();

  useEffect(() => {
    (async () => {
      try {
        const books = await getBooksByShelf(id);
        setBooks(books);
      } catch (e) {
        return <p> error</p>;
      }
    })();
  }, [setBooks, getBooksByShelf, id]);

  const shelfNames = {
    'to-read': 'To read',
    read: 'Read',
    'currently-reading': 'Currently reading',
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
    } else console.log('no books to read');
  };

  const toggleGridList = () => {
    setIsList(!isList);
  };

  return (
    <>
      <Wrapper>
        <ListHeader>
          <ShelfName>
            {getShelfName(id) || getShelfName(shelfs[0])}{' '}
            {getShelfName(id) === 'To read' ? (
              <RandomBookButton onClick={handleOpenRandomModal} title='Choose random book to read'>
                <RandomBookSvg />
              </RandomBookButton>
            ) : null}
          </ShelfName>

          <GridListToggleButton onClick={toggleGridList} isList={isList}></GridListToggleButton>
        </ListHeader>

        <StyledBooksList view={isList} data-testid='booksList'>
          {books.map(book => (
            <Book isList={isList} key={book.id} book={book} />
          ))}
        </StyledBooksList>

        <Modal
          appElement={document.getElementById('root')}
          isOpen={isRandomModalOpen}
          handleClose={handleCloseRandomModal}
          width='300px'
          height='200px'
        >
          <RandomBook handleClose={handleCloseRandomModal} />
        </Modal>
      </Wrapper>
    </>
  );
};

export default BooksList;
