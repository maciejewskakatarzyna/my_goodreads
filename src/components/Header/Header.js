import React, { useContext, useState } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledHeader } from './Header.styles';
import { StyledLink, StyledNavigation } from './Navigation.styles';
import { StyledLoginMenu } from './LoginMenu.styles';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
import AddBookForm from '../AddBookForm/AddBookForm';
import AddBookButton from '../Buttons/AddBookButton';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
  const { shelfs } = useContext(BookContext);

  const { handleOpenModal, handleCloseModal } = useModal();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleShowForm = () => {
    setIsConfirmModalOpen(false);
    setIsAddModalOpen(true);
    handleOpenModal();
  };

  const shelfNames = {
    'to-read': 'Chcę przeczytać',
    read: 'Przeczytane',
    'currently-reading': 'Teraz czytam',
  };

  const getShelfName = shelf => {
    return shelfNames[shelf];
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
        <Link to={`/`} className='logo' onClick={handleScrollUp}>
          My Goodreads
        </Link>
        <nav>
          <StyledNavigation>
            {shelfs.map(({ id }) => (
              <StyledLink key={id} to={`/shelfs/${id}`}>
                {getShelfName(id)}
              </StyledLink>
            ))}
          </StyledNavigation>
        </nav>
        <SearchBar />

        <AddBookButton title='Add new book' onClick={handleShowForm}></AddBookButton>

        <StyledLoginMenu>
          <p>Hello {auth.user.name}</p>
          <a href='#' onClick={auth.signOut}>
            Wyloguj
          </a>
        </StyledLoginMenu>
      </>
      <Modal isOpen={isAddModalOpen} handleClose={handleCloseAddModal} width='500px' height='400px'>
        <AddBookForm handleClose={handleCloseAddModal} handleShowConfirm={handleShowConfirm} />
      </Modal>
      <Modal
        isOpen={isConfirmModalOpen}
        handleClose={handleCloseConfirmModal}
        width='300px'
        height='150px'
      >
        <h2>Książka dodana!</h2>
      </Modal>
    </StyledHeader>
  );
};

Header.propTypes = {
  setIsFormVisible: PropTypes.func,
};

export default Header;
