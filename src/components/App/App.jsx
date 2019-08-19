import PropTypes from 'prop-types';
import React from 'react';
import NewBookBlock from '../NewBookBlock';
import BooksList from '../BooksList';
import SearchBlock from '../SearchBlock';
import './App.sass';

const App = ({
  newBook,
  changeNewBook,
  addNewBook,
  hasEmptyFields,
  changeFilter,
  visibleBooks,
  deleteBook,
  filter,
}) => (
  <div className="wrap">
    <SearchBlock
      onChangeFilter={changeFilter}
      value={filter}
    />
    <NewBookBlock
      newBook={newBook}
      onChangeNewBook={changeNewBook}
      onAddNewBook={addNewBook}
      hasEmptyFields={hasEmptyFields}
    />
    <BooksList
      visibleBooks={visibleBooks}
      onDeleteBook={deleteBook}
    />
  </div>
);
App.propTypes = {
  changeNewBook: PropTypes.func.isRequired,
  addNewBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  visibleBooks: PropTypes.objectOf(PropTypes.object).isRequired,
  newBook: PropTypes.objectOf(PropTypes.object).isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};
export default App;
