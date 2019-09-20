import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Book extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const { onDeleteBook } = this.props;
    onDeleteBook(+id);
  }

  render() {
    const {
      onTranslate,
      id,
      title,
      author,
    } = this.props;
    return (
      <li>
        <div className="book-item">
          <div className="book-item__cover" />
          <div className="book-item__buttons">
            <Link
              className="details"
              to={`/books/${id}`}
            >
              {onTranslate('btnDetails')}
            </Link>
            <button
              className="btn btn_delete-book"
              type="submit"
              value={id}
              onClick={this.handleClick}
            >
              {onTranslate('btnDelete')}
            </button>
          </div>
          <span className="book-item__title">{title}</span>
          <span className="book-item__author">{author}</span>
        </div>
      </li>
    );
  }
}
Book.propTypes = {
  onTranslate: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
