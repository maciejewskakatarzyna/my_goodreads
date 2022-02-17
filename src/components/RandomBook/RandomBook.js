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
            Kolejna książka do przeczytania:<span className='randomBook'>{title}</span>
          </p>
          <button onClick={() => startReading(id, bookToStart)}>Zacznij czytać!</button>
        </>
      ) : (
        <p>
          <span className='randomBook'>{title}</span>dodana do aktualnie czytanych książek!
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
