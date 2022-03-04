import React from 'react';
import { StyledModalWrapper } from './Modal.styles';
import PropTypes from 'prop-types';
import CloseButton from '../Buttons/CloseButton';

const Modal = ({ handleClose, isOpen, children, width, height }) => {
  return (
    <StyledModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
      width={width}
      height={height}
    >
      {children}
      {/*<button className='closeBtn' onClick={handleClose}>*/}
      {/*  x*/}
      {/*</button>*/}

      <CloseButton onClick={handleClose}></CloseButton>
    </StyledModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
