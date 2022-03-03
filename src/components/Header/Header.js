import React, { useContext, useState } from 'react';
import '../../index.css';
import plus from '../../assets/plus.png';
import BookContext from '../../contexts/BookContext';
import { StyledHeader } from './Header.styles';
import { StyledLink, StyledNavigation } from './Navigation.styles';
import { StyledLoginMenu } from './LoginMenu.styles';
import { StyledSearchInput } from './SearchInput.styles';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
import AddBookForm from '../AddBookForm/AddBookForm';

const Header = () => {
  const { books, setFilteredBooks, shelfs } = useContext(BookContext);

  const { handleOpenModal, handleCloseModal } = useModal();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleShowForm = () => {
    setIsConfirmModalOpen(false);
    setIsAddModalOpen(true);
    handleOpenModal();
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

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
    handleCloseModal();
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    handleCloseModal();
  };

  const handleShowConfirm = () => {
    setIsConfirmModalOpen(true);
    handleOpenModal();
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
        <button className='icon' onClick={handleShowForm}>
          <img alt='plus' src={plus} />
        </button>

        <StyledLoginMenu>
          <p>Witaj {auth.user.name}</p>
          <a href='#' onClick={auth.signOut}>
            Wyloguj
          </a>
        </StyledLoginMenu>
      </>
      <Modal isOpen={isAddModalOpen} handleClose={handleCloseAddModal}>
        <AddBookForm handleClose={handleCloseAddModal} handleShowConfirm={handleShowConfirm} />
      </Modal>
      <Modal isOpen={isConfirmModalOpen} handleClose={handleCloseConfirmModal}>
        <h2>Książka dodana!</h2>
      </Modal>
    </StyledHeader>
  );
};

Header.propTypes = {
  setIsFormVisible: PropTypes.func,
};

export default Header;
