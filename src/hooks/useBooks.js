import { useCallback } from 'react';
import axios from 'axios';

export const useBooks = () => {
  const getShelfs = useCallback(async () => {
    try {
      const result = await axios.get('/shelfs');
      return result.data.shelfs;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getBookById = useCallback(async bookId => {
    try {
      const result = await axios.get(`/books/${bookId}`);
      return result.data.books;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getBooksByShelf = useCallback(async id => {
    try {
      const result = await axios.get(`/shelfs/${id}`);
      return result.data.books;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getShelfs,
    getBooksByShelf,
    getBookById,
  };
};
