import React, { useState, useContext } from 'react';
import { StyledBookCard } from './BookCard.styles';
import { StyledBookDetails } from './BookDetails.styles';
import BookContext from '../../contexts/BookContext';

const BookCard = ({ book }) => {
  const { currentBook } = useContext(BookContext);

  // const { updateBook } = useContext(BookContext);

  // const [selectedOption, setSelectedOption] = useState(0);

  const options = [
    {
      value: 'to-read',
      label: 'Chcę przeczytać',
    },
    {
      value: 'read',
      label: 'Przeczytana',
    },
    {
      value: 'currently-reading',
      label: 'Czytam',
    },
  ];

  // const changeShelf = (book, shelf) => {
  //   updateBook(book.id, { ...book, exclusiveShelf: shelf });
  // };

  // const handleChange = e => {
  //   setSelectedOption(e.target.value);
  //   changeShelf(book, selectedOption);
  // };

  return (
    <StyledBookCard>
      <>
        <div className='coverWrapper'>
          <div className='noCoverCard'></div>
        </div>
        <StyledBookDetails>
          <p>{currentBook.title}</p>
          <p>{currentBook.author}</p>
          <p>{currentBook.yearPublished}</p>
          <p>{currentBook.publisher}</p>
          <p>{currentBook.shelf}</p>
          <p>{currentBook.genre}</p>
          <p>{currentBook.myRating}</p>
          <p>{currentBook.averageRating}</p>
          {/*<div>*/}
          {/*  <select value={selectedOption} onChange={e => handleChange(e)}>*/}
          {/*    {options.map(o => (*/}
          {/*      <option key={o.value} value={o.value}>*/}
          {/*        {o.label}*/}
          {/*      </option>*/}
          {/*    ))}*/}
          {/*  </select>*/}
          {/*</div>*/}
          {/*<button onClick={() => onDelete(book.id)}>Usuń książkę</button>*/}
        </StyledBookDetails>
      </>
    </StyledBookCard>
  );
};

export default BookCard;
