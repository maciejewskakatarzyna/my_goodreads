import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

const seed = () => {
  db.shelf.create({
    id: 'to-read',
  });
  db.shelf.create({
    id: 'read',
  });
  db.shelf.create({
    id: 'currently-reading',
  });

  for (let i = 0; i < 30; i++) {
    db.book.create();
  }
};

seed();

window.mocks = {
  seed,
  getBooks: () => db.book.getAll(),
  getShelfs: () => db.shelf.getAll(),
};
