import React from 'react';
import { render, screen } from '../../test-utils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import HeroImage from './HeroImage';
import { getByTestId } from '@testing-library/react';

const mock = new MockAdapter(axios);

describe('Hero Image', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays no text when quote is not loaded correctly', async () => {
    mock.onGet('https://api.quotable.io/random').reply(500);
    render(<HeroImage />);
    await expect(() => getByTestId('quoteAuthor')).toThrow();
    await expect(() => getByTestId('quoteText')).toThrow();
  });

  it('Displays quotes', async () => {
    mock.onGet('https://api.quotable.io/random').reply(200);
    render(<HeroImage />);
    const quoteAuthor = screen.getByTestId('quoteAuthor');
    const quoteText = screen.getByTestId('quoteText');
    await expect(quoteAuthor).toBeInTheDocument();
    await expect(quoteText).toBeInTheDocument();
  });
});
