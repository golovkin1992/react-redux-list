import { createSelector } from 'reselect';

const getFilter = state => state.filter;
const getBooks = state => state.books;
const getNewBook = state => state.newBook;

export const getVisibleBooksSelector = createSelector(
  [getFilter, getBooks],
  (filter, books) => {
    if (!filter || filter === '') {
      return books;
    }
    return books.filter(el => el.title.indexOf(filter) > -1);
  },
);

export const hasEmptyFieldsSelector = createSelector(
  [getNewBook],
  newBook => Object.keys(newBook).some(item => newBook[item] === ''),
);

export const getNewBookSelector = createSelector(
  [getNewBook],
  newBook => newBook,
);
