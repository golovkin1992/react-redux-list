import { bookNormalizer } from '../normalize';

const initialState = {
  filter: '',
  books: [],
  book: null,
  isLoading: false,
  error: null,
  bestBook: 4,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const {
    books,
  } = state;
  switch (type) {
    case 'CHANGE_NEW_BOOK': {
      const { name, value } = payload;
      const { newBook } = state;
      return { ...state, newBook: { ...newBook, [name]: value } };
    }
    case 'CHANGE_FILTER': {
      return { ...state, filter: payload };
    }
    case 'CHANGE_BOOK_PROPERTY': {
      const { book } = state;
      const { editableField, text } = payload;
      const updatedBook = Object.assign({}, { ...book, [editableField]: text });
      return {
        ...state,
        book: updatedBook,
      };
    }
    case 'FAILURE': {
      return { ...state, error: payload, isLoading: false };
    }
    case 'GET_BOOKS_REQUEST': {
      return { ...state, isLoading: true };
    }
    case 'GET_BOOKS_SUCCESS': {
      const { data } = payload;
      const booksNorm = bookNormalizer(data);
      console.log(booksNorm);
      return {
        ...state, books: data, isLoading: false, error: '',
      };
    }
    case 'GET_BOOK_REQUEST': {
      return { ...state, isLoading: true };
    }
    case 'GET_BOOK_SUCCESS': {
      const { data } = payload;
      return { ...state, book: data, isLoading: false };
    }
    case 'POST_BOOK_REQUEST': {
      return { ...state, isLoading: true };
    }
    case 'POST_BOOK_SUCCESS': {
      const filteredBooks = [...books, payload];
      return {
        ...state,
        books: filteredBooks,
        isLoading: false,
      };
    }
    case 'DELETE_BOOK_REQUEST': {
      return { ...state, isLoading: true };
    }
    case 'DELETE_BOOK_SUCCESS': {
      const filteredBooks = books.filter(el => el.id !== payload);
      return { ...state, books: filteredBooks, isLoading: false };
    }
    case 'PUT_BOOK_REQUEST': {
      return { ...state, isLoading: true };
    }
    case 'PUT_BOOK_SUCCESS': {
      const { id } = payload;
      const index = books.findIndex(el => el.id === id);
      const updatedBook = { ...books[index], ...payload };
      return {
        ...state,
        books: [
          ...books.slice(0, index),
          updatedBook,
          ...books.slice(index + 1),
        ],
        isLoading: false,
      };
    }
    case 'SET_BEST_BOOK': {
      const { id } = payload;
      return { ...state, bestBook: id };
    }
    default:
      return state;
  }
};
