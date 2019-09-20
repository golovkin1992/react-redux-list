import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import fields from '../../constants/Fields';
import './Fields.sass';
import RenderField from './RenderField';

class NewBookBlock extends Component {
  state = {
    isVisibleForm: false,
  }

  styles = {
    styleInput: {
      width: '100px',
    },
  };

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
      reset,
      handleSubmit,
      pristine,
      submitting,
      onTranslate,
    } = this.props;
    return (
      <div
        className="add-books-block"
      >
        <span>{onTranslate('addBooks')}</span>
        <button
          className="btn btn_add-book btn_toggle-book-form"
          type="button"
          onClick={this.handleVisibleForm}
        >
        +
        </button>
        {
          isVisibleForm && (
          <form
            className="fields"
            onSubmit={handleSubmit}
          >
            {
            fields.map(field => (
              <div className="field">
                <Field
                  key={field.name}
                  name={field.name}
                  component={RenderField}
                  hintText={onTranslate(`fields.${field.name}`)}
                  floatingLabelText={onTranslate(`fields.${field.name}`)}
                  autoComplete="off"
                  style={{ width: '100%' }}
                  options={field.options}
                  validate={field.validate}
                  onTranslate={onTranslate}
                />
              </div>
            ))}
            <button
              className="btn btn_add-book"
              type="submit"
              disabled={submitting}
            >
              {onTranslate('btnAdd')}
            </button>
            <button
              className="btn btn_add-book"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              {onTranslate('btnClear')}
            </button>
          </form>

          )}
      </div>

    );
  }
}

NewBookBlock.propTypes = {
  onTranslate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onPostBook: PropTypes.func.isRequired,
  newBook: PropTypes.objectOf(PropTypes.object).isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'bookForm' })(NewBookBlock);
