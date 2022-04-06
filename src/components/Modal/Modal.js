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

      <CloseButton title='Close' data-testid='closeButton' onClick={handleClose}></CloseButton>
    </StyledModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Modal;
