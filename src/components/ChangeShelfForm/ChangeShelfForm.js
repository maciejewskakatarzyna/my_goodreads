import React, { useContext } from 'react';
import { Form } from '../Form/FormField.styles';
import BasicButton from '../Buttons/BasicButton';
import { useForm } from 'react-hook-form';
import FormField from '../Form/FormField';
import { FormWrapper } from './ChangeShelfForm.styles';
import BookContext from '../../contexts/BookContext';
import { useBooks } from '../../hooks/useBooks';

const ChangeShelfForm = ({ book, handleCloseShelfModal }) => {
  const { setBooks, books, setCurrentBook } = useContext(BookContext);

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
    setBooks(books);
    setCurrentBook(res);
  };

  const onSubmit = data => {
    bookToEdit = data;
    handleEditBook(book.id, bookToEdit);
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
        </label>
        <BasicButton type='submit'>Save changes</BasicButton>
      </Form>
    </FormWrapper>
  );
};

export default ChangeShelfForm;
