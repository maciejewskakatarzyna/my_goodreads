import React from 'react';
import { StyledModalWrapper } from './Modal.styles';
import PropTypes from 'prop-types';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <StyledModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <button className='closeBtn' onClick={handleClose}>
        x
      </button>
    </StyledModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
