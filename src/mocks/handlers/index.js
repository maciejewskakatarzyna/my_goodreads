import { shelfs } from './shelfs';
import { books } from './books';
import { auth } from './auth';

export const handlers = [...shelfs, ...books, ...auth];
