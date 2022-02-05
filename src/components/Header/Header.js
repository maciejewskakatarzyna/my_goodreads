import React, { useContext, useEffect } from 'react';
import '../../index.css';
import plus from '../../assets/plus.png';
import shuffle from '../../assets/shuffle.png';
import BookContext from '../../contexts/BookContext';
import { StyledHeader } from './Header.styles';
import { StyledLink, StyledNavigation } from './Navigation.styles';
import { StyledLoginMenu } from './LoginMenu.styles';
import { StyledSearchInput } from './SearchInput.styles';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import RandomBook from '../RandomBook/RandomBook';
import useModal from '../Modal/useModal';

const Header = ({
  randomBook,
  startReading,
  setIsFormVisible,
  isAddedToCurrent,
  setIsAddedToCurrent,
}) => {
  const { books, setRandomBook, setIsRandomBook, setFilteredBooks, shelfs } =
    useContext(BookContext);

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const getRandomBook = () => {
    setIsAddedToCurrent(false);
    const toReadBase = books.filter(book => book.shelf === 'to-read');
    const random = toReadBase[Math.floor(Math.random() * toReadBase.length)];
    if (toReadBase.length > 0) {
      setRandomBook(random);
      setIsRandomBook(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else console.log('nie ma książek do przeczytania');
  };

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  // function getFilteredBooksForText(text) {
  //   return books.filter(
  //     book =>
  //       book.title.toString().toLowerCase().includes(text.toLowerCase()) ||
  //       book.author.toString().toLowerCase().includes(text.toLowerCase())
  //   );
  // }

  // function filterBooks(e) {
  //   const text = e.currentTarget.value;
  //   const filtered = getFilteredBooksForText(text);
  //   setFilteredBooks(filtered);
  // }

  const shelfNames = {
    'to-read': 'Chcę przeczytać',
    read: 'Przeczytane',
    'currently-reading': 'Teraz czytam',
  };

  const getShelfName = shelf => {
    return shelfNames[shelf];
  };

  const handleClose = () => {
    handleCloseModal();
  };

  const handleOpen = () => {
    handleOpenModal();
    getRandomBook();
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledHeader>
      <>
        <StyledLink to={`/`} className='logo' onClick={handleScrollUp}>
          My Goodreads
        </StyledLink>
        <nav>
          <StyledNavigation>
            {shelfs.map(({ id }) => (
              <StyledLink key={id} to={`/shelfs/${id}`} onClick={handleScrollDown}>
                {getShelfName(id)}
              </StyledLink>
            ))}
          </StyledNavigation>
        </nav>
        <form>
          <StyledSearchInput
            className='searchInput'
            type='text'
            placeholder='Wyszukaj książkę'
            // onInput={filterBooks}
          />
        </form>
        <Link to='/add-book' className='icon' onClick={handleShowForm}>
          <img alt='plus' src={plus} />
        </Link>
        <button className='icon' onClick={handleOpen}>
          <img alt='shuffle' src={shuffle} />
        </button>
        <StyledLoginMenu>
          <p>Witaj użytkowniku</p>
          <a href='#'>Wyloguj</a>
        </StyledLoginMenu>
      </>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <RandomBook
          randomBook={randomBook}
          startReading={startReading}
          handleClose={handleClose}
          isAddedToCurrent={isAddedToCurrent}
        />
      </Modal>
    </StyledHeader>
  );
};

export default Header;
