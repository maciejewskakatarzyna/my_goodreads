import React, { useContext } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';
import PropTypes from 'prop-types';
import { Form, Wrapper } from '../Form/FormField.styles';
import { useForm } from 'react-hook-form';
import FormField from '../Form/FormField';
import BasicButton from '../Buttons/BasicButton';
import { useNavigate } from 'react-router';

const AddBookForm = ({ handleClose, handleShowConfirm }) => {
  const { setBooks, books, setCurrentBook } = useContext(BookContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addNewBook } = useBooks();
  const navigate = useNavigate();

  let newBook = {};

  const handleAddBook = book => {
    addNewBook(book).then(bookToAdd => setBooks([...books, bookToAdd]));
  };

  const onSubmit = data => {
    newBook = data;
    handleAddBook(newBook);
    handleClose();
    handleShowConfirm();
    navigate(-1);
  };

  return (
    <>
      <Wrapper>
        <h2>Add new book</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label='Title'
            name='title'
            id='title'
            placeholder='Title'
            {...register('title')}
          />
          <FormField
            label='Author'
            name='author'
            id='author'
            placeholder='Author'
            {...register('author')}
          />
          <FormField
            label='Publisher'
            name='publisher'
            id='publisher'
            placeholder='Publisher'
            {...register('publisher')}
          />
          <FormField
            label='Year'
            name='yearPublished'
            id='yearPublished'
            placeholder='Year'
            {...register('yearPublished')}
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
              label='Romance'
              name='genre'
              id='romance'
              value='Romance'
              isRadio
              {...register('genre')}
            />
            <FormField
              type='radio'
              label='Fantasy'
              name='genre'
              id='fantasy'
              value='Fantasy'
              isRadio
              {...register('genre')}
            />
            <FormField
              type='radio'
              label='History'
              name='genre'
              id='history'
              value='History'
              isRadio
              {...register('genre')}
            />
            <FormField
              type='radio'
              label='Horror'
              name='genre'
              id='horror'
              value='Horror'
              isRadio
              {...register('genre')}
            />
            <FormField
              type='radio'
              label='Biographies'
              name='genre'
              id='biographies'
              value='Biographies'
              isRadio
              {...register('genre')}
            />
          </label>
          <BasicButton type='submit'>Add book</BasicButton>
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
