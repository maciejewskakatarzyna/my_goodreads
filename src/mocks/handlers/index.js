import { rest } from 'msw';
import { db } from '../db';

export const handlers = [
  rest.get('/shelfs', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ shelfs: db.shelf.getAll() }));
  }),
  rest.get('/shelfs/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingBooks = db.book.findMany({
        where: {
          shelf: {
            equals: req.params.id,
          },
        },
      });
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
        books: db.book.getAll(),
      })
    );
  }),
  rest.get('/books/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingBook = db.book.findFirst({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
      if (!matchingBook) {
        return res(
          ctx.status(404),
          ctx.json({
            error: 'No matching book',
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          books: matchingBook,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        books: db.book.getAll(),
      })
    );
  }),
];
