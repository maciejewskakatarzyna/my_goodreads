import React from 'react';
import '../../index.css';
import { StyledRandomBook } from './RandomBook.styles';

const RandomBook = ({ randomBook, onClose, startReading, isAddedToCurrent, setIsRandomBook }) => {
  const bookToStart = {
    id: randomBook.id,
    shelf: 'currently-reading',
  };

  const handleClose = () => {
    setIsRandomBook(false);
  };

  return (
    <StyledRandomBook>
      <button className='closeBtn' onClick={handleClose}>
        x
      </button>
      {!isAddedToCurrent ? (
        <>
          <p>
            Kolejna książka do przeczytania:<span className='randomBook'>{randomBook.title}</span>
          </p>
          <button onClick={() => startReading(randomBook.id, bookToStart)}>Zacznij czytać!</button>
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
