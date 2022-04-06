import React from 'react';
import { ButtonsWrapper, DeleteQuestion } from './DeleteModal.styles';
import PropTypes from 'prop-types';
import BasicButton from '../Buttons/BasicButton';

const DeleteModal = ({ handleDeleteBook, handleCloseDeleteModal, book }) => {
  return (
    <>
      <DeleteQuestion>
        Are you sure to delete <span>{book}</span>?
      </DeleteQuestion>
      <ButtonsWrapper>
        <BasicButton onClick={handleDeleteBook}>Yes</BasicButton>
        <BasicButton onClick={handleCloseDeleteModal}>No</BasicButton>
      </ButtonsWrapper>
    </>
  );
};

DeleteModal.propTypes = {
  handleDeleteBook: PropTypes.func,
  handleCloseDeleteModal: PropTypes.func,
  book: PropTypes.string,
};

export default DeleteModal;
