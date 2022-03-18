import React, { useContext } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';
import PropTypes from 'prop-types';
import { Form, Wrapper } from '../Form/FormField.styles';
import FormField from '../Form/FormField';
import { useForm } from 'react-hook-form';
import BasicButton from '../Buttons/BasicButton';

const EditBookForm = ({ book, handleClose }) => {
  const { setBooks, books, currentBook, setCurrentBook } = useContext(BookContext);

  const { editBookById } = useBooks();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let bookToEdit = {};
  const res = {};

  function update(target, src) {
    Object.keys(target).forEach(k => (res[k] = src.hasOwnProperty(k) ? src[k] : target[k]));
    return res;
  }

  const handleEditBook = (id, bookToEdit) => {
    editBookById(id, bookToEdit);
    update(book, bookToEdit);
    // setCurrentBook(res);
    setBooks(books);
    console.log(books);
  };

  const onSubmit = data => {
    bookToEdit = data;
    handleEditBook(book.id, bookToEdit);
    handleClose();
  };

  return (
    <Wrapper>
      <h2>Edit book</h2>
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
          Genre{' '}
          <FormField
            type='radio'
            label='fiction'
            name='genre'
            id='fiction'
            value='fiction'
            isRadio
            {...register('genre')}
          />
          <FormField
            type='radio'
            label='history'
            name='genre'
            id='history'
            value='history'
            isRadio
            {...register('genre')}
          />
        </label>
        <BasicButton type='submit'>Save changes</BasicButton>
      </Form>
    </Wrapper>
  );
};

EditBookForm.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publisher: PropTypes.string,
  }),
  handleClose: PropTypes.func,
};

export default EditBookForm;
