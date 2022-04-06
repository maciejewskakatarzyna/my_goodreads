import React, { useContext, useState } from 'react';
import { StyledHeader, HeaderWrapper } from './Header.styles';
import {
  StyledLink,
  StyledNavigation,
  ShelfLink,
  ShelfsList,
  MobileShelfButton,
} from './Navigation.styles';
import { StyledLoginMenu } from './LoginMenu.styles';
import { useAuth } from '../../hooks/useAuth';
import Modal from '../Modal/Modal';
import AddBookForm from '../AddBookForm/AddBookForm';
import AddBookButton from '../Buttons/AddBookButton';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ReactComponent as UserSvg } from '../../assets/images/user.svg';
import UserSignOutButton from '../Buttons/UserSignOutButton';
import { ReactComponent as BookShelfSvg } from '../../assets/images/bookshelf.svg';
import { BooksContext } from '../../providers/BooksProvider';

const Header = () => {
  const { shelfs } = useContext(BooksContext);
  const auth = useAuth();

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isShelfListVisible, setIsShelfListVisible] = useState(false);

  const handleShowForm = () => {
    setIsConfirmModalOpen(false);
    setIsAddModalOpen(true);
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
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleShowConfirm = () => {
    setIsConfirmModalOpen(true);
  };

  const toggleShowShelfs = () => {
    setIsShelfListVisible(!isShelfListVisible);
  };

  return (
    <HeaderWrapper>
      <StyledHeader>
        <Link to={`/`} className='logo' onClick={handleScrollUp}>
          {isDesktop ? 'My Goodreads' : 'MG'}
        </Link>
        <nav>
          <>
            {isDesktop || isTablet ? (
              <StyledNavigation>
                {shelfs.map(({ id }) => (
                  <StyledLink key={id} to={`/shelfs/${id}`}>
                    {getShelfName(id)}
                  </StyledLink>
                ))}
              </StyledNavigation>
            ) : (
              <MobileShelfButton title='Choose shelf' onClick={toggleShowShelfs}>
                <BookShelfSvg />
                {isShelfListVisible && (
                  <>
                    <ShelfsList>
                      {shelfs.map(({ id }) => (
                        <ShelfLink key={id} to={`/shelfs/${id}`}>
                          {getShelfName(id)}
                        </ShelfLink>
                      ))}
                    </ShelfsList>
                  </>
                )}
              </MobileShelfButton>
            )}
          </>
        </nav>

        <SearchBar />

        <AddBookButton title='Add new book' data-testid='addNewBook' onClick={handleShowForm} />

        <StyledLoginMenu>
          {auth.user.name && isDesktop ? <p>Hello, {auth.user.name}</p> : null}
          <UserSignOutButton title='Sign out' onClick={auth.signOut}>
            <UserSvg />
          </UserSignOutButton>
        </StyledLoginMenu>
      </StyledHeader>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={isAddModalOpen}
        handleClose={handleCloseAddModal}
        width={isDesktop || isTablet ? '500px' : '300px'}
        height='400px'
      >
        <AddBookForm handleClose={handleCloseAddModal} handleShowConfirm={handleShowConfirm} />
      </Modal>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={isConfirmModalOpen}
        handleClose={handleCloseConfirmModal}
        width={isDesktop || isTablet ? '300px' : '200px'}
        height='150px'
      >
        {isDesktop || isTablet ? (
          <h2>Book added successfully!</h2>
        ) : (
          <h3>Book added successfully!</h3>
        )}
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
