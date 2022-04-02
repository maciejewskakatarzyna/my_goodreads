import React, { useContext, useState } from 'react';
import '../../index.css';
import { useBooks } from '../../hooks/useBooks';
import PropTypes from 'prop-types';
import { Error, Wrapper } from '../Form/FormField.styles';
import { useForm } from 'react-hook-form';
import FormField from '../Form/FormField';
import BasicButton from '../Buttons/BasicButton';
import { useNavigate } from 'react-router';
import { StyledAddBookForm } from './AddBookForm.styles';
import { BooksContext } from '../../providers/BooksProvider';

const AddBookForm = ({ handleClose, handleShowConfirm }) => {
  const { setBooks, books } = useContext(BooksContext);

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
        <StyledAddBookForm onSubmit={handleSubmit(onSubmit)}>
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
            isError={errors.yearPublished}
            {...register('yearPublished', {
              pattern: {
                value: /^[12][0-9]{3}$/i,
                message: 'Provide year in format YYYY (1000 to 2999)',
              },
            })}
          />
          {errors.yearPublished ? (
            <>
              {errors.yearPublished.type === 'pattern' && (
                <Error>{errors.yearPublished.message}</Error>
              )}
            </>
          ) : null}
          <fieldset>
            <details>
              <summary>
                <p>Select a shelf</p>
              </summary>
              <FormField
                type='radio'
                label='To read'
                name='shelf'
                id='to-read'
                value='to-read'
                isRadio
                data-testid='toRead'
                defaultChecked
                {...register('shelf')}
              />
              <FormField
                type='radio'
                label='Read'
                name='shelf'
                id='read'
                value='read'
                isRadio
                {...register('shelf')}
              />
              <FormField
                type='radio'
                label='Currently reading'
                name='shelf'
                id='currently-reading'
                value='currently-reading'
                isRadio
                {...register('shelf')}
              />
            </details>
          </fieldset>
          <fieldset>
            <details>
              <summary>
                <p>Select genre</p>
              </summary>
              <FormField
                type='radio'
                label='Romance'
                name='genre'
                id='romance'
                value='Romance'
                isRadio
                defaultChecked
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
                data-testid='history'
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
            </details>
          </fieldset>
          <BasicButton type='submit'>Add book</BasicButton>
        </StyledAddBookForm>
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
