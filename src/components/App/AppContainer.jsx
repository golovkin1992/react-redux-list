import { connect } from 'react-redux';
import App from './App';
import {
  getVisibleBooksSelector,
  hasEmptyFieldsSelector,
  getNewBookSelector,
} from '../../selectors';
import {
  changeNewBookAction,
  addNewBookAction,
  changeFilterAction,
  deleteBookAction,
} from '../../actions/index';

const mapStateToProps = state => ({
  newBook: getNewBookSelector(state),
  hasEmptyFields: hasEmptyFieldsSelector(state),
  filterBooks: getVisibleBooksSelector(state),
});

export default
connect(mapStateToProps,
  {
    changeNewBook: changeNewBookAction,
    addNewBook: addNewBookAction,
    changeFilter: changeFilterAction,
    deleteBook: deleteBookAction,
  })(App);
