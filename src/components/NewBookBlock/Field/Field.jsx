import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Field.sass';

export default class Field extends PureComponent {
  handleChange = (e) => {
    const { value } = e.target;
    const { onChangeNewBook, name } = this.props;
    onChangeNewBook(name, value);
  }

  render() {
    const {
      name,
      value,
      label,
      isDropDown,
      options,
    } = this.props;
    return (
      isDropDown
        ? (
          <div
            htmlFor={name}
            className="field"
          >
            <select
              className="field__input"
              onBlur={this.handleChange}
              selected={value}
            >
              <option>Выберите</option>
              {
          options.map(item => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
            </select>
            <span className="field__label">{label}</span>
          </div>
        ) : (
          <div
            className="field"
          >
            <input
              type="text"
              placeholder={label}
              className="field__input"
              value={value}
              onChange={this.handleChange}
            />
            <span className="field__label">{label}</span>
          </div>
        )
    );
  }
}
Field.propTypes = {
  onChangeNewBook: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  isDropDown: PropTypes.bool.isRequired,
};
