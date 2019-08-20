import { createSelector } from 'reselect';

const getFilter = state => state.filter;
const getBooks = state => state.books;
const getNewBook = state => state.newBook;
const getId = (state, ownProps) => ownProps.match.params.id;


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
export const bookSelector = createSelector(
  [getBooks, getId],
  (books, id) => books.find(el => el.id === id),
);
