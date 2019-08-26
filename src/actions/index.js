import {
  CHANGE_NEW_BOOK,
  CHANGE_FILTER,
  CHANGE_BOOK_PROPERTY,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_REQUEST,
  POST_BOOK_SUCCESS,
  POST_BOOK_REQUEST,
  FAILURE,
  PUT_BOOK_SUCCESS,
  PUT_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOK_REQUEST,
} from '../constants/ActionTypes';

export const changeNewBookAction = (name, value) => (
  { type: CHANGE_NEW_BOOK, payload: { name, value } });

export const changeFilterAction = filter => (
  { type: CHANGE_FILTER, payload: filter });

export const changeBookPropertyAction = (editableField, text) => (
  { type: CHANGE_BOOK_PROPERTY, payload: { editableField, text } });

export const getBooksRequest = () => ({
  type: GET_BOOKS_REQUEST,
});

export const getBooksSuccessAction = books => ({
  type: GET_BOOKS_SUCCESS, payload: books,
});

export const failureAction = error => ({
  type: FAILURE, payload: error,
});

export const deleteBookRequestAction = id => ({
  type: DELETE_BOOK_REQUEST, payload: id,
});

export const deleteBookSuccessAction = id => ({
  type: DELETE_BOOK_SUCCESS, payload: id,
});

export const postBookRequestAction = book => ({
  type: POST_BOOK_REQUEST, payload: book,
});

export const postBookSuccessAction = book => ({
  type: POST_BOOK_SUCCESS, payload: book,
});

export const putBookRequestAction = book => ({
  type: PUT_BOOK_REQUEST, payload: book,
});

export const putBookSuccessAction = book => ({
  type: PUT_BOOK_SUCCESS, payload: book,
});

export const getBookRequestAction = id => ({
  type: GET_BOOK_REQUEST, payload: id,
});

export const getBookSuccessAction = book => ({
  type: GET_BOOK_SUCCESS, payload: book,
});
