import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import fields from '../../constants/Fields';
import './Fields.sass';

export default class NewBookBlock extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { newBook, addNewBook } = this.props;
    addNewBook(newBook);
  }

  render() {
    const {
      newBook,
      onChangeNewBook,
      hasEmptyFields,
    } = this.props;
    return (
      <form>
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

        </div>
        <button
          onClick={this.handleClick}
          type="submit"
          disabled={hasEmptyFields}
        >
          Добавить
        </button>
      </form>

    );
  }
}
NewBookBlock.propTypes = {
  addNewBook: PropTypes.func.isRequired,
  onChangeNewBook: PropTypes.func.isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
  newBook: PropTypes.objectOf(PropTypes.object).isRequired,
};
