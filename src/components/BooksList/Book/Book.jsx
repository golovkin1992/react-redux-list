import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeBookPropertyAction } from '../../../actions';
import fields from '../../../constants/Fields';
import NotFound from '../../NotFound';
import './Book.sass';


const mapStateToProps = state => ({
  books: state.books,
});
class Book extends PureComponent {
  state = {
    book: null,
    editableField: '',
  }

  inputFocusRef = React.createRef();

  componentDidMount() {
    const { books, match: { params: { id } } } = this.props;
    this.setState({ book: books.find(el => el.id === id) });
  }

  componentDidUpdate() {
    const { editableField } = this.state;
    if (editableField.length !== 0) {
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
    const { editableField, book } = this.state;
    const { changeBookProperty } = this.props;
    const { id } = book;
    const text = e.target.value;
    if (!e.keyCode || e.keyCode === 13) {
      if (book[editableField].length !== 0) {
        changeBookProperty(id, editableField, text);
        this.setState({ editableField: '' });
      }
    }
  };

   handleChange = (e) => {
     const { editableField, book } = this.state;
     const text = e.target.value;
     this.setState({ book: Object.assign({}, { ...book, [editableField]: text }) });
   }

   render() {
     const { book, editableField } = this.state;
     return (

       !book ? (
         <NotFound />
       ) : (
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
           )}
        </div>
      ))
      }
           <Link className="link link_book" to="/"> Назад</Link>
         </div>
       )
     );
   }
}
Book.propTypes = {
  changeBookProperty: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.array).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, { changeBookProperty: changeBookPropertyAction })(Book);
