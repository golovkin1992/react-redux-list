const initialState = {
  newItem: {
    title: '',
    country: 'Выберите',
    language: '',
    pages: '',
    author: '',
    year: '',
  },
  filter: '',
  items: JSON.parse(localStorage.getItem('books')) || [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const { items } = state;
  switch (type) {
    case 'CHANGE_NEW_ITEM': {
      const { name, value } = payload;
      const { newItem } = state;
      return { ...state, newItem: { ...newItem, [name]: value } };
    }
    case 'ADD_NEW_ITEM': {
      const item = Object.assign({ id: String(items.length + 1) }, payload);
      const newState = {
        ...state,
        newItem: {
          author: '',
          country: '',
          language: '',
          pages: '',
          title: '',
          year: '',
        },
        items: [...items, item],
      };
      localStorage.setItem('books', JSON.stringify(newState.items));
      return newState;
    }
    case 'CHANGE_FILTER': {
      return { ...state, filter: payload };
    }
    case 'CHANGE_ITEM_PROPERTY': {
      const { id, editableField, text } = payload;
      const index = items.findIndex(el => el.id === id);
      const updatedObj = Object.assign({}, { ...items[index], [editableField]: text });
      const newState = {
        ...state,
        items: [
          ...items.slice(0, index),
          updatedObj,
          ...items.slice(index + 1),
        ],
      };
      localStorage.setItem('books', JSON.stringify(newState.items));
      return newState;
    }
    case 'DELETE_ITEM': {
      const newState = { ...state, items: items.filter(el => el.id !== payload) };
      localStorage.setItem('books', JSON.stringify(newState.items));
      return newState;
    }
    default:
      return state;
  }
};
