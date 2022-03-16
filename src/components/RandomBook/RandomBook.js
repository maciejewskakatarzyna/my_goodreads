import React from 'react';
import '../../index.css';
import { StyledRandomBook } from './RandomBook.styles';
import PropTypes from 'prop-types';

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
            Next book to read:<span className='randomBook'>{title}</span>
          </p>
          <button onClick={() => startReading(id, bookToStart)}>Start reading!</button>
        </>
      ) : (
        <p>
          <span className='randomBook'>{title}</span>added to currently reading!
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
