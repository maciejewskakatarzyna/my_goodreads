import React from 'react';
import { ButtonsWrapper, DeleteQuestion } from './DeleteModal.styles';
import PropTypes from 'prop-types';
import BasicButton from '../Buttons/BasicButton';

const DeleteModal = ({ handleDeleteBook, handleCloseDeleteModal, book }) => {
  return (
    <>
      <DeleteQuestion>
        Czy na pewno chcesz usunąć <span>{book}</span>?
      </DeleteQuestion>
      <ButtonsWrapper>
        <BasicButton onClick={handleDeleteBook}>TAK</BasicButton>
        <BasicButton onClick={handleCloseDeleteModal}>NIE</BasicButton>
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
