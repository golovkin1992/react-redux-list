import { connect } from 'react-redux';
import App from './App';
import {
  visibleBooksSelector,
  hasEmptyFieldsSelector,
  filterSelector,
  newBookSelector,
} from '../../selectors';
import {
  changeNewBookAction,
  addNewBookAction,
  changeFilterAction,
  deleteBookAction,
} from '../../actions/index';

const mapStateToProps = state => ({
  newBook: newBookSelector(state),
  filter: filterSelector(state),
  hasEmptyFields: hasEmptyFieldsSelector(state),
  visibleBooks: visibleBooksSelector(state),
});

export default
connect(mapStateToProps,
  {
    changeNewBook: changeNewBookAction,
    addNewBook: addNewBookAction,
    changeFilter: changeFilterAction,
    deleteBook: deleteBookAction,
  })(App);
