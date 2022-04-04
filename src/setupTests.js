import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
import { db } from './mocks/db';

const server = setupServer(...handlers);

beforeAll(() => {
  db.shelf.create({
    id: 'to-read',
  });
  db.shelf.create({
    id: 'read',
  });
  db.shelf.create({
    id: 'currently-reading',
  });

  db.user.create();

  for (let i = 0; i < 30; i++) {
    db.book.create();
  }

  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
