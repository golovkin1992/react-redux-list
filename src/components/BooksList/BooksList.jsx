import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BooksList.sass';

export class BooksList extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const { onDeleteBook } = this.props;
    onDeleteBook(id);
  }

  render() {
    const { filterBooks } = this.props;
    return (
      <ul className="book-list">
        {
        filterBooks.map(book => (
          <li key={book.id}>
            <div className="book-item">
              <div className="cover" />
              <Link className="link" to={`/books/${book.id}`}>
                <h1 className="title">{book.title}</h1>
              </Link>
              <button
                type="submit"
                value={book.id}
                onClick={this.handleClick}
              >
              X
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
BooksList.propTypes = {
  onDeleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default BooksList;
