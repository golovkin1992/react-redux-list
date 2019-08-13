import {
  CHANGE_NEW_ITEM,
  ADD_NEW_ITEM,
  CHANGE_FILTER,
  CHANGE_ITEM_PROPERTY,
  DELETE_ITEM,
} from '../constants/ActionTypes';

export const changeNewItemAction = (name, value) => (
  { type: CHANGE_NEW_ITEM, payload: { name, value } });
export const addNewItemAction = newItem => (
  { type: ADD_NEW_ITEM, payload: newItem });
export const changeFilterAction = filter => (
  { type: CHANGE_FILTER, payload: filter });
export const changeItemPropertyAction = (id, editableField, text) => (
  { type: CHANGE_ITEM_PROPERTY, payload: { id, editableField, text } });
export const deleteItemAction = id => (
  { type: DELETE_ITEM, payload: id });
