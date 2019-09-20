import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import NewBookBlock from '../NewBookBlock';
import BooksList from '../BooksList';
import SearchBlock from '../SearchBlock';
import './App.sass';

const App = ({
  getBooks,
  postBook,
  changeFilter,
  visibleBooks,
  deleteBook,
  filter,
  error,
  isLoading,
  t,
  i18n,
}) => {
  const onSubmit = (formData) => {
    postBook(formData);
  };
  return (
    <div className="wrap">
      <SearchBlock
        onChangeFilter={changeFilter}
        value={filter}
        onTranslate={t}
        i18n={i18n}
      />
      <NewBookBlock
        onTranslate={t}
        i18n={i18n}
        onSubmit={onSubmit}
      />
      <BooksList
        visibleBooks={visibleBooks}
        onDeleteBook={deleteBook}
        onGetBooks={getBooks}
        error={error}
        isLoading={isLoading}
        onTranslate={t}
        i18n={i18n}
      />
    </div>
  );
};
App.propTypes = {
  getBooks: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  postBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  visibleBooks: PropTypes.objectOf(PropTypes.object).isRequired,
  i18n: PropTypes.objectOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default withTranslation()(App);
