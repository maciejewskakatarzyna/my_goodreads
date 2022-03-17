import React from 'react';
import '../../index.css';
import { StyledRandomBook } from './RandomBook.styles';
import PropTypes from 'prop-types';
import BasicButton from '../Buttons/BasicButton';

const RandomBook = ({ randomBook: { id, title }, startReading, isAddedToCurrent }) => {
  const bookToStart = {
    id: id,
    shelf: 'currently-reading',
  };

  return (
    <StyledRandomBook>
      {!isAddedToCurrent ? (
        <>
          <p>
            Next book to read:<span>{title}</span>
          </p>
          <BasicButton onClick={() => startReading(id, bookToStart)}>Start reading!</BasicButton>
        </>
      ) : (
        <p>
          <span>{title}</span>added to currently reading!
        </p>
      )}
    </StyledRandomBook>
  );
};

RandomBook.propTypes = {
  randomBook: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }),
  startReading: PropTypes.func,
  isAddedToCurrent: PropTypes.bool,
};

export default RandomBook;
