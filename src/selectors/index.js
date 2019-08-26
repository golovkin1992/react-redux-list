import { createSelector } from 'reselect';

const getFilter = state => state.filter;
const getError = state => state.error;
const getBooks = state => state.books;
const getNewBook = state => state.newBook;
const getBook = state => state.book;
const getIsLoading = state => state.isLoading;


export const visibleBooksSelector = createSelector(
  [getFilter, getBooks],
  (filter, books) => {
    if (!filter || filter === '') {
      return books;
    }
    return books.filter(el => el.title.indexOf(filter) > -1);
  },
);

export const hasEmptyFieldsSelector = createSelector(
  getNewBook,
  newBook => Object.keys(newBook).some(item => newBook[item] === ''),
);

export const newBookSelector = createSelector(
  getNewBook,
  newBook => newBook,
);

export const filterSelector = createSelector(
  getFilter,
  filter => filter,
);

export const findBookSelector = createSelector(
  getBook,
  book => book,
);

export const errorSelector = createSelector(
  getError,
  error => error,
);

export const isLoadingSelector = createSelector(
  getIsLoading,
  isLoading => isLoading,
);
