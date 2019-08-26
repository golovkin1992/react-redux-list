import { connect } from 'react-redux';
import App from './App';
import {
  visibleBooksSelector,
  hasEmptyFieldsSelector,
  filterSelector,
  newBookSelector,
  errorSelector,
  isLoadingSelector,
} from '../../selectors';
import {
  changeNewBookAction,
  postBookRequestAction,
  deleteBookRequestAction,
  getBooksRequest,
  changeFilterAction,
} from '../../actions/index';

const mapStateToProps = state => ({
  newBook: newBookSelector(state),
  filter: filterSelector(state),
  hasEmptyFields: hasEmptyFieldsSelector(state),
  visibleBooks: visibleBooksSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

export default
connect(mapStateToProps,
  {
    changeNewBook: changeNewBookAction,
    postBook: postBookRequestAction,
    deleteBook: deleteBookRequestAction,
    getBooks: getBooksRequest,
    changeFilter: changeFilterAction,
  })(App);
