import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './BookList.sass';

const BooksList = ({ visibleBooks, onDeleteBook }) => {
  const elements = visibleBooks.map(book => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      onDeleteBook={onDeleteBook}
    />
  ));
  return <ul className="book-list">{elements}</ul>;
};

BooksList.propTypes = {
  onDeleteBook: PropTypes.func.isRequired,
  visibleBooks: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default BooksList;
