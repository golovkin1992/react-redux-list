import {
  CHANGE_NEW_BOOK,
  ADD_NEW_BOOK,
  CHANGE_FILTER,
  CHANGE_BOOK_PROPERTY,
  DELETE_BOOK,
} from '../constants/ActionTypes';

export const changeNewBookAction = (name, value) => (
  { type: CHANGE_NEW_BOOK, payload: { name, value } });
export const addNewBookAction = newBook => (
  { type: ADD_NEW_BOOK, payload: newBook });
export const changeFilterAction = filter => (
  { type: CHANGE_FILTER, payload: filter });
export const changeBookPropertyAction = (id, editableField, text) => (
  { type: CHANGE_BOOK_PROPERTY, payload: { id, editableField, text } });
export const deleteBookAction = id => (
  { type: DELETE_BOOK, payload: id });
