import React, { useContext } from 'react';
import '../../index.css';
import plus from '../../assets/plus.png';
import BookContext from '../../contexts/BookContext';
import { StyledHeader } from './Header.styles';
import { StyledLink, StyledNavigation } from './Navigation.styles';
import { StyledLoginMenu } from './LoginMenu.styles';
import { StyledSearchInput } from './SearchInput.styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';

const Header = ({ setIsFormVisible }) => {
  const { books, setFilteredBooks, shelfs } = useContext(BookContext);

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

  const auth = useAuth();

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

        <StyledLoginMenu>
          <p>Witaj {auth.user.name}</p>
          <a href='#' onClick={auth.signOut}>
            Wyloguj
          </a>
        </StyledLoginMenu>
      </>
    </StyledHeader>
  );
};

Header.propTypes = {
  setIsFormVisible: PropTypes.func,
};

export default Header;
