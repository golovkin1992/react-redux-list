import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import fields from '../../constants/Fields';
import './Fields.sass';

export default class NewItemBlock extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { newItem, addNewItem } = this.props;
    addNewItem(newItem);
  }

  render() {
    const {
      newItem,
      onChangeNewItem,
      hasEmptyFields,
    } = this.props;
    return (
      <form>
        <div className="fields">
          {fields.map(field => (
            <Field
              key={field.name}
              onChangeNewItem={onChangeNewItem}
              name={field.name}
              value={newItem[field.name]}
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
NewItemBlock.propTypes = {
  addNewItem: PropTypes.func.isRequired,
  onChangeNewItem: PropTypes.func.isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
  newItem: PropTypes.objectOf(PropTypes.object).isRequired,
};
