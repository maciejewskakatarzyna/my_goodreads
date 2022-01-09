import React from 'react';
import { StyledModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <StyledModalWrapper isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <button className='closeBtn' onClick={handleClose}>
        x
      </button>
    </StyledModalWrapper>
  );
};

export default Modal;
