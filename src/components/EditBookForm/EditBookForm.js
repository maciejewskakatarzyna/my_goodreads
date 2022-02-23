import React, { useContext, useRef } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledEditBookForm } from './EditBookForm.styles';
import { useBooks } from '../../hooks/useBooks';
import PropTypes from 'prop-types';
import { Form } from '../Form/FormField.styles';
import FormField from '../Form/FormField';

const EditBookForm = ({ book, handleClose }) => {
  const { setBooks, books, setCurrentBook } = useContext(BookContext);

  const { editBookById } = useBooks();

  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const publisherInput = useRef(null);
  const radioInput1 = useRef(null);
  const radioInput2 = useRef(null);
  const radioInput3 = useRef(null);
  const genreInput = useRef(null);

  let bookToEdit = {};
  let radioShelf;

  // const getRadioValue = () => {
  //   if (radioInput1.current.checked) {
  //     radioShelf = radioInput1.current.value;
  //   } else if (radioInput2.current.checked) {
  //     radioShelf = radioInput2.current.value;
  //   } else if (radioInput3.current.checked) {
  //     radioShelf = radioInput3.current.value;
  //   }
  // };

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

  const handleSubmit = event => {
    event.preventDefault();
    // getRadioValue();
    bookToEdit = {
      id: book.id,
      title: titleInput.current.value ? titleInput.current.value : book.title,
      author: authorInput.current.value ? authorInput.current.value : book.author,
      publisher: publisherInput.current.value ? publisherInput.current.value : book.publisher,
      // shelf: radioShelf,
      // genre: genreInput.current.value,
    };
    handleEditBook(book.id, bookToEdit);
    handleClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormField label='Tytuł' name='title' id='title' ref={titleInput} />
        <FormField label='Autor' name='author' id='author' ref={authorInput} />
        <FormField label='Wydawnictwo' name='publisher' id='publisher' ref={publisherInput} />

        <button>ZAPISZ ZMIANY</button>
      </Form>
    </>
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
