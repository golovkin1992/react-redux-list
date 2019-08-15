import generateID from '../utils/generateID';

const initialState = {
  newBook: {
    title: '',
    country: 'Выберите',
    language: '',
    pages: '',
    author: '',
    year: '',
  },
  filter: '',
  books: JSON.parse(localStorage.getItem('books')) || [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const { books } = state;
  switch (type) {
    case 'CHANGE_NEW_BOOK': {
      const { name, value } = payload;
      const { newBook } = state;
      return { ...state, newBook: { ...newBook, [name]: value } };
    }
    case 'ADD_NEW_BOOK': {
      const book = Object.assign({ id: generateID() }, payload);
      const newState = {
        ...state,
        newBook: {
          author: '',
          country: '',
          language: '',
          pages: '',
          title: '',
          year: '',
        },
        books: [...books, book],
      };
      localStorage.setItem('books', JSON.stringify(newState.books));
      return newState;
    }
    case 'CHANGE_FILTER': {
      return { ...state, filter: payload };
    }
    case 'CHANGE_BOOK_PROPERTY': {
      const { id, editableField, text } = payload;
      const index = books.findIndex(el => el.id === id);
      const updatedObj = Object.assign({}, { ...books[index], [editableField]: text });
      const newState = {
        ...state,
        books: [
          ...books.slice(0, index),
          updatedObj,
          ...books.slice(index + 1),
        ],
      };
      localStorage.setItem('books', JSON.stringify(newState.books));
      return newState;
    }
    case 'DELETE_BOOK': {
      const newState = { ...state, books: books.filter(el => el.id !== payload) };
      localStorage.setItem('books', JSON.stringify(newState.books));
      return newState;
    }
    default:
      return state;
  }
};
