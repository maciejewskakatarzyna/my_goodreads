import React from 'react';
import { ModalWrapper, ButtonsWrapper, DeleteButton, DeleteQuestion } from './DeleteModal.styles';

const DeleteModal = ({ handleDeleteBook, handleCloseDeleteModal, book }) => {
  return (
    <ModalWrapper>
      <DeleteQuestion>
        Czy na pewno chcesz usunąć <span>{book}</span>?
      </DeleteQuestion>
      <ButtonsWrapper>
        <DeleteButton onClick={handleDeleteBook}>TAK</DeleteButton>
        <DeleteButton onClick={handleCloseDeleteModal}>NIE</DeleteButton>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default DeleteModal;
