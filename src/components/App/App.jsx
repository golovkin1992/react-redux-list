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
  filterBooks,
  deleteBook,
}) => (
  <div className="wrap">
    <SearchBlock
      onChangeFilter={changeFilter}
    />
    <NewBookBlock
      newBook={newBook}
      onChangeNewBook={changeNewBook}
      addNewBook={addNewBook}
      hasEmptyFields={hasEmptyFields}
    />
    <BooksList
      filterBooks={filterBooks}
      onDeleteBook={deleteBook}
    />
  </div>
);
App.propTypes = {
  changeNewBook: PropTypes.func.isRequired,
  addNewBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filterBooks: PropTypes.objectOf(PropTypes.object).isRequired,
  newBook: PropTypes.objectOf(PropTypes.object).isRequired,
  hasEmptyFields: PropTypes.bool.isRequired,
};
export default App;
