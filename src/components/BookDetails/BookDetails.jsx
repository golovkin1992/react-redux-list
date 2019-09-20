import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import {
  changeBookPropertyAction,
  putBookRequestAction,
  getBookRequestAction,
} from '../../actions';
import fields from '../../constants/Fields';
import Preloader from '../Preloader';
import NotFound from '../NotFound';
import './BookDetails.sass';
import {
  findBookSelector,
  errorSelector,
  isLoadingSelector,
} from '../../selectors';

const mapStateToProps = state => ({
  book: findBookSelector(state.reducers),
  error: errorSelector(state.reducers),
  isLoading: isLoadingSelector(state.reducers),
});

class BookDetails extends PureComponent {
  state = {
    editableField: '',
  }

  inputFocusRef = React.createRef();

  componentDidMount() {
    const { match, getBook } = this.props;
    const { id } = match.params;
    getBook(id);
  }

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
    const { putBook, book } = this.props;
    if (!e.keyCode || e.keyCode === 13) {
      if (book[editableField].length) {
        putBook(book);
        this.setState({ editableField: '' });
      }
    }
  };

   handleChange = (e) => {
     const { editableField } = this.state;
     const { changeBookProperty } = this.props;
     const text = e.target.value;
     changeBookProperty(editableField, text);
   }

   render() {
     const { editableField } = this.state;
     const { book, isLoading, error } = this.props;
     return (
       isLoading ? <Preloader />
         : (
           !book ? <NotFound />
             : (
               <div className="book-details">
                 <div className="book-item__cover book-item__cover_details" />
                 <div className="books-wrap">
                   {error && <p>Ошибка! {error}</p>}
                   {
                  fields.map(field => (
                    <div className="book" key={field.name}>
                      <span className="book__title">{i18next.t(`fields.${field.name}`)}</span>
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
                   <Link className="link link_book" to="/">{i18next.t('btnBack')}</Link>
                 </div>
               </div>
             )
         )
     );
   }
}
BookDetails.propTypes = {
  getBook: PropTypes.func.isRequired,
  putBook: PropTypes.func.isRequired,
  changeBookProperty: PropTypes.func.isRequired,
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
export default connect(mapStateToProps,
  {
    changeBookProperty: changeBookPropertyAction,
    putBook: putBookRequestAction,
    getBook: getBookRequestAction,
  })(BookDetails);
