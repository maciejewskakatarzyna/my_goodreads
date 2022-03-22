import React, { useContext } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';
import PropTypes from 'prop-types';
import { Form, Wrapper } from '../Form/FormField.styles';
import FormField from '../Form/FormField';
import { useForm } from 'react-hook-form';
import BasicButton from '../Buttons/BasicButton';
import { StyledEditBookForm } from './EditBookForm.styles';

const EditBookForm = ({
  book: { id, title, author, publisher, yearPublished, cover, genre, shelf },
  handleClose,
}) => {
  const { setBooks, books, currentBook, setCurrentBook } = useContext(BookContext);

  const { editBookById } = useBooks();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let bookToEdit = {};
  let bookData = {
    id,
    cover,
    shelf,
  };

  const handleEditBook = (id, bookToEdit) => {
    editBookById(id, bookToEdit);
    setBooks(books);
  };

  const onSubmit = data => {
    bookToEdit = { ...data, ...bookData };
    handleEditBook(id, bookToEdit);
    handleClose();
    setCurrentBook(bookToEdit);
  };

  return (
    <Wrapper>
      <h2>Edit book</h2>
      <StyledEditBookForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label='Title'
          name='title'
          id='title'
          placeholder={title}
          defaultValue={title}
          {...register('title')}
        />
        <FormField
          label='Author'
          name='author'
          id='author'
          placeholder={author}
          defaultValue={author}
          {...register('author')}
        />
        <FormField
          label='Publisher'
          name='publisher'
          id='publisher'
          placeholder={publisher}
          defaultValue={publisher}
          {...register('publisher')}
        />
        <FormField
          label='Year'
          name='yearPublished'
          id='yearPublished'
          placeholder={yearPublished}
          defaultValue={yearPublished}
          {...register('yearPublished')}
        />
        <fieldset>
          <legend>Genre</legend>
          <FormField
            type='radio'
            label='Romance'
            name='genre'
            id='romance'
            value='Romance'
            isRadio
            defaultChecked={genre === 'Romance'}
            {...register('genre')}
          />
          <FormField
            type='radio'
            label='Fantasy'
            name='genre'
            id='fantasy'
            value='Fantasy'
            isRadio
            defaultChecked={genre === 'Fantasy'}
            {...register('genre')}
          />
          <FormField
            type='radio'
            label='History'
            name='genre'
            id='history'
            value='History'
            isRadio
            defaultChecked={genre === 'History'}
            {...register('genre')}
          />
          <FormField
            type='radio'
            label='Horror'
            name='genre'
            id='horror'
            value='Horror'
            isRadio
            defaultChecked={genre === 'Horror'}
            {...register('genre')}
          />
          <FormField
            type='radio'
            label='Biographies'
            name='genre'
            id='biographies'
            value='Biographies'
            isRadio
            defaultChecked={genre === 'Biographies'}
            {...register('genre')}
          />
        </fieldset>
        <BasicButton type='submit'>Save changes</BasicButton>
      </StyledEditBookForm>
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
