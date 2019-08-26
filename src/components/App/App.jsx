import PropTypes from 'prop-types';
import React from 'react';
import NewBookBlock from '../NewBookBlock';
import BooksList from '../BooksList';
import SearchBlock from '../SearchBlock';
import './App.sass';

const App = ({
  getBooks,
  newBook,
  changeNewBook,
  postBook,
  hasEmptyFields,
  changeFilter,
  visibleBooks,
  deleteBook,
  filter,
  error,
  isLoading,
}) => (
  <div className="wrap">
    <SearchBlock
      onChangeFilter={changeFilter}
      value={filter}
    />
    <NewBookBlock
      newBook={newBook}
      onChangeNewBook={changeNewBook}
      onPostBook={postBook}
      hasEmptyFields={hasEmptyFields}
      isLoading={isLoading}
    />
    <BooksList
      visibleBooks={visibleBooks}
      onDeleteBook={deleteBook}
      onGetBooks={getBooks}
      error={error}
      isLoading={isLoading}
    />
  </div>
);
App.propTypes = {
  getBooks: PropTypes.func.isRequired,
  changeNewBook: PropTypes.func.isRequired,
  postBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  visibleBooks: PropTypes.objectOf(PropTypes.object).isRequired,
  newBook: PropTypes.objectOf(PropTypes.object).isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default App;
