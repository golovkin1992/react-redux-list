const initialState = {
  newBook: {
    title: '',
    country: '',
    language: '',
    pages: '',
    author: '',
    year: '',
  },
  filter: '',
  books: [],
  book: null,
  isLoading: false,
  error: null,
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
        newBook: {
          author: '',
          country: '',
          language: '',
          pages: '',
          title: '',
          year: '',
        },
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
    default:
      return state;
  }
};
