import '../../helpers/matchMedia.mock';
import React from 'react';
import BookCard from './BookCard';
import { render, screen } from '../../test-utils';
import { BooksContext } from '../../providers/BooksProvider';

const book = {
  id: 1,
  title: 'Test Title',
  author: 'Test Author',
  publisher: 'Test Publisher',
  yearPublished: 2000,
  shelf: 'to-read',
  cover: '',
  genre: 'History',
};

describe('Book Card', () => {
  it('Renders the component with given data', () => {
    render(
      <BooksContext.Provider value={{ currentBook: book }}>
        <BookCard />
      </BooksContext.Provider>
    );
    screen.getByText(/Test Title/i);
    screen.getByText(/Test Author/i);
    screen.getByText(/Test Publisher/i);
    screen.getByText(/2000/i);
    screen.getByText(/History/i);
  });
});
