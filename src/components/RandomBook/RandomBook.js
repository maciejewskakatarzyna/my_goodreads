import React from 'react';
import '../../index.css';
import { StyledRandomBook } from './RandomBook.styles';
import PropTypes from 'prop-types';
import BasicButton from '../Buttons/BasicButton';
import { useNavigate } from 'react-router';

const RandomBook = ({ randomBook: { id, title }, isAddedToCurrent, startReading }) => {
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

RandomBook.propTypes = {
  randomBook: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }),
  startReading: PropTypes.func,
  isAddedToCurrent: PropTypes.bool,
};

export default RandomBook;
