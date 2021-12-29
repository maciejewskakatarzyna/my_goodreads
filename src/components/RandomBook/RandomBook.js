import React from 'react';
import '../../index.css';
import { StyledRandomBook } from './RandomBook.styles';

const RandomBook = ({ randomBook, onClose, startReading, isAddedToCurrent }) => {
  return (
    <StyledRandomBook>
      <button className='closeBtn' onClick={onClose}>
        x
      </button>
      {!isAddedToCurrent ? (
        <>
          <p>
            Kolejna książka do przeczytania:<span className='randomBook'>{randomBook.title}</span>
          </p>
          <button onClick={startReading}>Zacznij czytać!</button>
        </>
      ) : (
        <p>
          <span className='randomBook'>{randomBook.title}</span>dodana do aktualnie czytanych
          książek!
        </p>
      )}
    </StyledRandomBook>
  );
};

export default RandomBook;
