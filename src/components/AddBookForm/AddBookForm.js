import React, { useContext } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';
import PropTypes from 'prop-types';
import { Form, Wrapper } from '../Form/FormField.styles';
import { useForm } from 'react-hook-form';
import FormField from '../Form/FormField';

const AddBookForm = ({ handleClose, handleShowConfirm }) => {
  const { setBooks, books } = useContext(BookContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addNewBook } = useBooks();

  let newBook = {};

  const handleAddBook = book => {
    addNewBook(book).then(bookToAdd => setBooks([...books, bookToAdd]));
  };

  const onSubmit = data => {
    newBook = data;
    handleAddBook(newBook);
    handleClose();
    handleShowConfirm();
  };

  return (
    <>
      <Wrapper>
        <h2>Dodaj książkę</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label='title'
            name='title'
            id='title'
            placeholder='title'
            {...register('title')}
          />
          <FormField
            label='author'
            name='author'
            id='author'
            placeholder='author'
            {...register('author')}
          />
          <FormField
            label='publisher'
            name='publisher'
            id='publisher'
            placeholder='publisher'
            {...register('publisher')}
          />
          <label>
            Shelf{' '}
            <select {...register('shelf')}>
              <option value='to-read'>to read</option>
              <option value='read'>read</option>
              <option value='currently-reading'>currently reading</option>
            </select>
          </label>
          <label>
            Genre{' '}
            <FormField
              type='radio'
              label='beletrystyka'
              name='genre'
              id='beletrystyka'
              value='beletrystyka'
              {...register('genre')}
            />
            <FormField
              type='radio'
              label='historia'
              name='genre'
              id='historia'
              value='historia'
              {...register('genre')}
            />
          </label>
          <button type='submit'>Dodaj książkę</button>
        </Form>
      </Wrapper>
    </>
  );
};

AddBookForm.propTypes = {
  onClose: PropTypes.func,
  isConfirmVisible: PropTypes.bool,
  setIsConfirmVisible: PropTypes.func,
  setIsFormVisible: PropTypes.func,
  isFormVisible: PropTypes.bool,
};

export default AddBookForm;
