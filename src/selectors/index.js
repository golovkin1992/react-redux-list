import { createSelector } from 'reselect';

const getFilter = state => state.filter;
const getError = state => state.error;
/* /const getBooks = (state) => {
  return denormalize({ books: [1, 2] }, mySchema, state.books.entities);
};/ */
const getBooks = state => state.books;
const getBook = state => state.book;
const getIsLoading = state => state.isLoading;
// const getBestBook = state => state.bestBook;


export const visibleBooksSelector = createSelector(
  [getFilter, getBooks],
  (filter, books) => {
    if (!filter || filter === '') {
      return books;
    }
    return books.filter(el => el.title.indexOf(filter) > -1);
  },
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
