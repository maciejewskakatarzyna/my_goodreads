import React, { useContext } from 'react';
import { StyledRandomBook } from './RandomBook.styles';
import BasicButton from '../Buttons/BasicButton';
import { useNavigate } from 'react-router';
import { BooksContext } from '../../providers/BooksProvider';

const RandomBook = () => {
  const {
    randomBook: { id, title },
    startReading,
    isAddedToCurrent,
  } = useContext(BooksContext);

  const bookToStart = {
    id: id,
    shelf: 'currently-reading',
  };

  const navigate = useNavigate();

  const startReadingWithNav = (id, bookToStart) => {
    startReading(id, bookToStart);
    navigate('/shelfs/currently-reading');
  };

  return (
    <StyledRandomBook>
      {!isAddedToCurrent ? (
        <>
          <p>
            Next book to read:<span>{title}</span>
          </p>
          <BasicButton onClick={() => startReadingWithNav(id, bookToStart)}>
            Start reading!
          </BasicButton>
        </>
      ) : (
        <p>
          <span>{title}</span>added to currently reading!
        </p>
      )}
    </StyledRandomBook>
  );
};

export default RandomBook;
