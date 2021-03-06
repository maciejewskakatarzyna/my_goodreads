import { rest } from 'msw';
import { db } from '../db';

export const books = [
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

  rest.delete('/books/:id', (req, res, ctx) => {
    if (req.params.id) {
      const removedBook = db.book.delete({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });

      return res(
        ctx.status(200),
        ctx.json({
          removedBook,
        })
      );
    }

    return res(
      ctx.status(400),
      ctx.json({
        error: 'Please provide ID of removed book',
      })
    );
  }),

  rest.post('/books', (req, res, ctx) => {
    const newBook = {
      id: db.book.id,
      title: req.body.title || 'Title',
      author: req.body.author || 'Author',
      publisher: req.body.publisher || 'Publisher',
      yearPublished: req.body.yearPublished || 'Year',
      cover: db.book.cover,
      shelf: req.body.shelf,
      genre: req.body.genre || db.book.genre,
    };

    db.book.create(newBook);

    return res(
      ctx.status(201),
      ctx.json({
        books: newBook,
      })
    );
  }),

  rest.put('/books/:id', (req, res, ctx) => {
    const updatedBook = db.book.update({
      where: {
        id: {
          equals: req.body.id,
        },
      },
      data: req.body,
    });

    return res(
      ctx.status(200),
      ctx.json({
        books: updatedBook,
      })
    );
  }),
  rest.post('/books/search', (req, res, ctx) => {
    const matchingBooks = db.book.findMany({
      where: {
        title: {
          contains: req.body.searchPhrase,
        },
      },
    });
    return res(
      ctx.status(200),
      ctx.json({
        books: matchingBooks,
      })
    );
  }),
];
