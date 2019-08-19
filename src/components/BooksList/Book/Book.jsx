import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Book extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const { onDeleteBook } = this.props;
    onDeleteBook(id);
  }

  render() {
    const { id, title } = this.props;
    return (
      <li>
        <Link className="link" to={`/books/${id}`}>
          <div className="book-item">
            <div className="book-item__cover" />
            <h1 className="book-item__title">{title}</h1>
            <button
              className="btn btn_delete-book"
              type="submit"
              value={id}
              onClick={this.handleClick}
            />
          </div>
        </Link>
      </li>
    );
  }
}
Book.propTypes = {
  onDeleteBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
