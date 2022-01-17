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

const Header = ({ setIsFormVisible, setIsAddedToCurrent }) => {
  const { books, setRandomBook, setIsRandomBook, setFilteredBooks, shelfs } =
    useContext(BookContext);

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

  function getFilteredBooksForText(text) {
    return books.filter(
      book =>
        book.title.toString().toLowerCase().includes(text.toLowerCase()) ||
        book.author.toString().toLowerCase().includes(text.toLowerCase())
    );
  }

  function filterBooks(e) {
    const text = e.currentTarget.value;
    const filtered = getFilteredBooksForText(text);
    setFilteredBooks(filtered);
  }

  const shelfNames = {
    'to-read': 'Chcę przeczytać',
    read: 'Przeczytane',
    'currently-reading': 'Teraz czytam',
  };

  const getShelfName = shelf => {
    return shelfNames[shelf];
  };

  return (
    <StyledHeader>
      <>
        <nav>
          <StyledNavigation>
            {shelfs.map(({ id }) => (
              <StyledLink key={id} to={`/shelfs/${id}`}>
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
            onInput={filterBooks}
          />
        </form>
        <Link to='/add-book' className='icon' onClick={handleShowForm}>
          <img alt='plus' src={plus} />
        </Link>
        <button className='icon' onClick={getRandomBook}>
          <img alt='shuffle' src={shuffle} />
        </button>
        <StyledLoginMenu>
          <p>Witaj użytkowniku</p>
          <a href='#'>Wyloguj</a>
        </StyledLoginMenu>
      </>
    </StyledHeader>
  );
};

export default Header;
