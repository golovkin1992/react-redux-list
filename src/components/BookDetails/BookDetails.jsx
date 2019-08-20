import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeBookPropertyAction } from '../../actions';
import fields from '../../constants/Fields';
import NotFound from '../NotFound';
import './BookDetails.sass';
import { findBookSelector } from '../../selectors';

const mapStateToProps = (state, ownProps) => ({
  book: findBookSelector(state, ownProps),
});
class BookDetails extends PureComponent {
  state = {
    editableField: '',
  }

  inputFocusRef = React.createRef();

  componentDidUpdate() {
    const { editableField } = this.state;
    if (editableField.length) {
      this.inputFocusRef.current.focus();
    }
  }

  handleDblClick = (e) => {
    const { value } = e.target.attributes.name;
    this.setState({ editableField: value });
  }

  handleKeyDown = (e) => {
    this.handleInputEdit(e);
  }

  handleBlur = (e) => {
    this.handleInputEdit(e);
  };

  handleInputEdit = (e) => {
    const { editableField } = this.state;
    const { changeBookProperty, book } = this.props;
    const { id } = book;
    const text = e.target.value;
    if (!e.keyCode || e.keyCode === 13) {
      if (book[editableField].length) {
        changeBookProperty(id, editableField, text);
        this.setState({ editableField: '' });
      }
    }
  };

   handleChange = (e) => {
     const { editableField } = this.state;
     const { changeBookProperty, book } = this.props;
     const { id } = book;
     const text = e.target.value;
     changeBookProperty(id, editableField, text);
   }

   render() {
     const { editableField } = this.state;
     const { book } = this.props;
     return (
       book ? (
         <div className="books-wrap">
           {
            fields.map(field => (
              <div className="book" key={field.name}>
                <span className="book__title">{field.label}</span>
                {
                  editableField === field.name ? (
                    <input
                      className="book__edit"
                      type="text"
                      ref={this.inputFocusRef}
                      value={book[field.name]}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      onKeyDown={this.handleKeyDown}
                    />
                  ) : (
                    <span
                      className="book__value"
                      name={field.name}
                      onDoubleClick={this.handleDblClick}
                    >
                      {book[field.name]}
                    </span>
                  )
                }
              </div>
            ))
            }
           <Link className="link link_book" to="/"> Назад</Link>
         </div>
       ) : (
         <NotFound />
       )
     );
   }
}
BookDetails.propTypes = {
  changeBookProperty: PropTypes.func.isRequired,
  book: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps,
  { changeBookProperty: changeBookPropertyAction })(BookDetails);
