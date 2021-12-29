import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import '../../index.css';
import plus from '../../assets/plus.png';
import shuffle from '../../assets/shuffle.png';
import BookContext from '../../contexts/BookContext';
import { StyledHeader } from './Header.styles';
import { StyledNavigation } from './Navigation.styles';
import { StyledLoginMenu } from './LoginMenu.styles';
import { StyledSearchInput } from './SearchInput.styles';
import { Link, useParams } from 'react-router-dom';

const Header = ({ setIsFormVisible, setIsAddedToCurrent, setIsBookAdded }) => {
  const [shelfs, setShelfs] = useState([]);

  const { shelf } = useParams();

  const {
    setBase,
    booksRead,
    booksToRead,
    currentBooks,
    books,
    setRandomBook,
    setIsRandomBook,
    setFilteredBooks,
  } = useContext(BookContext);

  const handleBaseChange = clickedBase => {
    if (clickedBase.name === 'Przeczytane') {
      setBase({ items: booksRead, name: clickedBase.name });
    } else if (clickedBase.name === 'Do przeczytania') {
      setBase({ items: booksToRead, name: clickedBase.name });
    } else if (clickedBase.name === 'Aktualnie czytane') {
      setBase({ items: currentBooks, name: clickedBase.name });
    } else if (clickedBase.name === 'Wszystkie książki') {
      setBase({ items: books, name: clickedBase.name });
    }
  };

  const getRandomBook = () => {
    setIsAddedToCurrent(false);
    const toReadBase = books.filter(book => book.exclusiveShelf === 'to-read');
    const random = toReadBase[Math.floor(Math.random() * toReadBase.length)];
    setRandomBook(random);
    setIsRandomBook(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleShowForm = () => {
    setIsBookAdded(false);
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

  const getShelfs = useCallback(async () => {
    try {
      const result = await axios.get('http://localhost:4000/exclusiveShelfs');
      console.log(result.data);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const shelfs = await getShelfs(shelf);
      setShelfs(shelfs);
    })();
  }, [getShelfs]);

  return (
    <StyledHeader>
      <>
        <nav>
          <StyledNavigation>
            {shelfs.map(({ shelf }) => (
              <Link key={shelf} to={`/${shelf}`}>
                {shelf}
              </Link>
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
