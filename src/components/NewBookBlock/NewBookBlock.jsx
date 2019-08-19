import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import fields from '../../constants/Fields';
import './Fields.sass';

export default class NewBookBlock extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { newBook, onAddNewBook } = this.props;
    onAddNewBook(newBook);
  }

  render() {
    const {
      newBook,
      onChangeNewBook,
      hasEmptyFields,
    } = this.props;
    return (
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
          disabled={hasEmptyFields}
        >
          Добавить
        </button>
      </div>
    );
  }
}
NewBookBlock.propTypes = {
  onAddNewBook: PropTypes.func.isRequired,
  onChangeNewBook: PropTypes.func.isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
  newBook: PropTypes.objectOf(PropTypes.object).isRequired,
};
