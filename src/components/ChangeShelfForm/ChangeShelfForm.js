import React, { useContext } from 'react';
import { Form } from '../Form/FormField.styles';
import BasicButton from '../Buttons/BasicButton';
import { useForm } from 'react-hook-form';
import FormField from '../Form/FormField';
import { FormWrapper } from './ChangeShelfForm.styles';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';

const ChangeShelfForm = ({
  book: { id, author, title, publisher, yearPublished, shelf, genre, cover },
  handleCloseShelfModal,
}) => {
  const { setBooks, books, setCurrentBook } = useContext(BookContext);

  const { editBookById } = useBooks();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let bookToEdit = {};
  let bookData = {
    id,
    author,
    title,
    publisher,
    yearPublished,
    cover,
    genre,
  };

  const handleEditBook = (id, bookToEdit) => {
    editBookById(id, bookToEdit);
    setBooks(books);
    setCurrentBook(bookToEdit);
  };

  const onSubmit = data => {
    bookToEdit = { ...data, ...bookData };
    handleEditBook(id, bookToEdit);
    handleCloseShelfModal();
  };

  return (
    <FormWrapper>
      <h2>Change book shelf</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <FormField
            type='radio'
            label='To read'
            name='shelf'
            id='to-read'
            value='to-read'
            isRadio
            defaultChecked={shelf === 'to-read'}
            {...register('shelf')}
          />
          <FormField
            type='radio'
            label='Read'
            name='shelf'
            id='read'
            value='read'
            isRadio
            defaultChecked={shelf === 'read'}
            {...register('shelf')}
          />
          <FormField
            type='radio'
            label='Currently reading'
            name='shelf'
            id='currently-reading'
            value='currently-reading'
            isRadio
            defaultChecked={shelf === 'currently-reading'}
            {...register('shelf')}
          />
        </label>
        <BasicButton type='submit'>Save changes</BasicButton>
      </Form>
    </FormWrapper>
  );
};

export default ChangeShelfForm;
