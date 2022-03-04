import React from 'react';
import { ButtonsWrapper, DeleteButton, DeleteQuestion } from './DeleteModal.styles';
import PropTypes from 'prop-types';

const DeleteModal = ({ handleDeleteBook, handleCloseDeleteModal, book }) => {
  return (
    <>
      <DeleteQuestion>
        Czy na pewno chcesz usunąć <span>{book}</span>?
      </DeleteQuestion>
      <ButtonsWrapper>
        <DeleteButton onClick={handleDeleteBook}>TAK</DeleteButton>
        <DeleteButton onClick={handleCloseDeleteModal}>NIE</DeleteButton>
      </ButtonsWrapper>
    </>
  );
};

DeleteModal.propTypes = {
  handleDeleteBook: PropTypes.func,
  handleCloseDeleteModal: PropTypes.func,
  book: PropTypes.object,
};

export default DeleteModal;
