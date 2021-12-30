import { rest } from 'msw';
import { books } from '../data/books';
import { shelfs } from '../data/shelfs';

export const handlers = [
  rest.get('/shelfs', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ shelfs }));
  }),

  rest.get('/books/:shelf', (req, res, ctx) => {
    if (req.params.shelf) {
      const matchingBooks = books.filter(book => book.shelf === req.params.shelf);
      return res(
        ctx.status(200),
        ctx.json({
          books: matchingBooks,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        books,
      })
    );
  }),
];
