import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import fields from '../../constants/Fields';
import './Fields.sass';

export default class NewBookBlock extends Component {
  state = {
    isVisibleForm: false,
  }

  handleClick = (e) => {
    e.preventDefault();
    const { newBook, onPostBook } = this.props;
    onPostBook(newBook);
  }

  handleVisibleForm = () => {
    const { isVisibleForm } = this.state;
    this.setState({ isVisibleForm: !isVisibleForm });
  }

  render() {
    const { isVisibleForm } = this.state;
    const {
      newBook,
      onChangeNewBook,
      hasEmptyFields,
      isLoading,
    } = this.props;
    return (
      <div
        className="add-books-block"
      >
        <span>Добавить книги</span>
        <button
          className="btn btn_add-book btn_toggle-book-form"
          type="button"
          onClick={this.handleVisibleForm}
        >
        +
        </button>
        { isVisibleForm && (
        <div className="fields">
          {fields.map(field => (
            <Field
              key={field.name}
              onChangeNewBook={onChangeNewBook}
              name={field.name}
              value={newBook[field.name]}
              label={field.label}
              options={field.options}
              isDropDown={field.isDropDown}
            />
          ))}
          <button
            className="btn btn_add-book"
            onClick={this.handleClick}
            type="submit"
            disabled={hasEmptyFields || isLoading}
          >
          Добавить
          </button>
        </div>
        )}
      </div>

    );
  }
}
NewBookBlock.propTypes = {
  onPostBook: PropTypes.func.isRequired,
  onChangeNewBook: PropTypes.func.isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
  newBook: PropTypes.objectOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
