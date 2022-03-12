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

  const getAllBooks = useCallback(async () => {
    try {
      const result = await axios.get(`/shelfs`);
      return result.data.books;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const deleteBookById = useCallback(async id => {
    try {
      await axios.delete(`/books/${id}`);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addNewBook = useCallback(async bookToAdd => {
    try {
      const result = await axios.post(`/books`, bookToAdd);
      const addedBook = result.data;
      return addedBook;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const editBookById = useCallback(async (id, bookToEdit) => {
    try {
      const result = await axios.put(`/books/${id}`, bookToEdit);
      const editedBook = result.data;
      return editedBook;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findBooks = async searchPhrase => {
    try {
      const { data } = await axios.post(`/books/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getShelfs,
    getBooksByShelf,
    getBookById,
    deleteBookById,
    addNewBook,
    editBookById,
    getAllBooks,
    findBooks,
  };
};
