import React, { useContext, useState } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledHeader, HeaderWrapper } from './Header.styles';
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
import useMediaQuery from '../../hooks/useMediaQuery';
import { ReactComponent as UserSvg } from '../../assets/images/user.svg';
import UserSignOutButton from '../Buttons/UserSignOutButton';

const Header = () => {
  const { shelfs } = useContext(BookContext);

  const { handleOpenModal, handleCloseModal } = useModal();
  const isDesktop = useMediaQuery('(min-width: 960px)');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleShowForm = () => {
    setIsConfirmModalOpen(false);
    setIsAddModalOpen(true);
    handleOpenModal();
  };

  const shelfNames = {
    'to-read': 'To read',
    read: 'Read',
    'currently-reading': 'Currently reading',
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
    <HeaderWrapper>
      <StyledHeader>
        <Link to={`/`} className='logo' onClick={handleScrollUp}>
          {isDesktop ? 'My Goodreads' : 'MG'}
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

        <AddBookButton
          title='Add new book'
          data-testid='addNewBook'
          onClick={handleShowForm}
        ></AddBookButton>

        <StyledLoginMenu>
          {auth.user.name && isDesktop ? <p>Hello, {auth.user.name}</p> : null}
          <UserSignOutButton onClick={auth.signOut}>
            <UserSvg />
          </UserSignOutButton>
        </StyledLoginMenu>
      </StyledHeader>
      <Modal isOpen={isAddModalOpen} handleClose={handleCloseAddModal} width='500px' height='400px'>
        <AddBookForm handleClose={handleCloseAddModal} handleShowConfirm={handleShowConfirm} />
      </Modal>
      <Modal
        isOpen={isConfirmModalOpen}
        handleClose={handleCloseConfirmModal}
        width='300px'
        height='150px'
      >
        <h2>Book added successfully!</h2>
      </Modal>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  setIsFormVisible: PropTypes.func,
};

export default Header;
