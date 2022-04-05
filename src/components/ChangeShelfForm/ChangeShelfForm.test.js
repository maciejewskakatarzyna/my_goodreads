import '../../helpers/matchMedia.mock';
import React from 'react';
import ChangeShelfForm from './ChangeShelfForm';
import BookCard from '../BookCard/BookCard';
import { render, screen } from '../../test-utils';
import { BooksContext } from '../../providers/BooksProvider';
import { fireEvent } from '@testing-library/react';

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

describe('Change Shelf Form', () => {
  beforeEach(() => {
    render(
      <BooksContext.Provider value={{ currentBook: book }}>
        <BookCard />
        <ChangeShelfForm book={book} />
      </BooksContext.Provider>
    );
  });
  it('Renders change shelf form', () => {
    const shelfImageButton = screen.getByTestId('changeShelfButton');
    fireEvent.click(shelfImageButton);
    screen.getByText(/Change book shelf/i);
  });

  it('Changes book shelf properly', () => {
    const radio = screen.getByLabelText('To read');
    fireEvent.change(radio, { target: { value: 'currently-reading' } });
    expect(radio.value).toBe('currently-reading');
  });
});
