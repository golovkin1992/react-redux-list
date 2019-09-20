import { connect } from 'react-redux';
import App from './App';
import {
  visibleBooksSelector,
  filterSelector,
  errorSelector,
  isLoadingSelector,
} from '../../selectors';
import {
  postBookRequestAction,
  deleteBookRequestAction,
  getBooksRequest,
  changeFilterAction,
} from '../../actions/index';

const mapStateToProps = state => ({
  filter: filterSelector(state.reducers),
  visibleBooks: visibleBooksSelector(state.reducers),
  isLoading: isLoadingSelector(state.reducers),
  error: errorSelector(state.reducers),
});

export default
connect(mapStateToProps,
  {
    postBook: postBookRequestAction,
    deleteBook: deleteBookRequestAction,
    getBooks: getBooksRequest,
    changeFilter: changeFilterAction,
  })(App);
