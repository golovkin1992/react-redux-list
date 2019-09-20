import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './BookList.sass';
import Preloader from '../Preloader';

export default class BooksList extends PureComponent {
  componentDidMount() {
    const { onGetBooks } = this.props;
    onGetBooks();
  }

  render() {
    const {
      visibleBooks,
      onDeleteBook,
      error,
      isLoading,
      onTranslate,
    } = this.props;
    return (
      isLoading ? (
        <Preloader />
      ) : (
        <div className="book-list-block">
          <span className="title-book-list">{onTranslate('titleList')}</span>
          <ul className="book-list">
            {error && <p>Ошибка! {error}</p>}
            { visibleBooks.map(book => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                onDeleteBook={onDeleteBook}
                onTranslate={onTranslate}
              />
            ))}
          </ul>
        </div>
      )
    );
  }
}

BooksList.propTypes = {
  onGetBooks: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onTranslate: PropTypes.func.isRequired,
  visibleBooks: PropTypes.arrayOf(PropTypes.array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
